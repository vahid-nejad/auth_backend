import { CategoryService } from './../base/category/category.service';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { retry } from 'rxjs';
import { CreateProductVariantProtoTypeDto } from 'src/base/dto/productVariantProtoType.dto';
import { Product } from 'src/entities/product.entity';
import { ProductColorVariant } from 'src/entities/productColorVariant.entity';
import { ProductDescription } from 'src/entities/productDescription.entity';
import { ProductSpecific } from 'src/entities/productSpecific.entity';
import { ProductVariant } from 'src/entities/productVariant.entity';
import { FindCondition, In, Like, Repository } from 'typeorm';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    @InjectRepository(ProductColorVariant)
    private readonly productColorVariantRepo: Repository<ProductColorVariant>,
    @InjectRepository(ProductVariant)
    private readonly productVariantRepo: Repository<ProductVariant>,
    @InjectRepository(ProductSpecific)
    private readonly productSpecificRepo: Repository<ProductSpecific>,
    @InjectRepository(ProductDescription)
    private readonly productDescriptionRepo: Repository<ProductDescription>,
    private readonly categoryService: CategoryService,
  ) {}
  async create(createProductDto: CreateProductDto) {
    console.log('dto: ', createProductDto);
    const product = this.productRepo.create(createProductDto);
    product.brand = { id: createProductDto.brandId };
    product.category = { id: createProductDto.categoryId };

    product.colorVariants = await Promise.all(
      createProductDto.colorVariants.map((colorVariant) =>
        this.productColorVariantRepo.create({
          color: { code: colorVariant.colorCode },
          price: colorVariant.price,
          discount: colorVariant.discount,
          stock: colorVariant.stock,
        }),
      ),
    );

    product.variants = await Promise.all(
      createProductDto.productVariants.map((variant) =>
        this.productVariantRepo.create({
          varinat: { id: variant.variantId },
          pricingProtocol: variant.pricingProtocl,
          pricingValue: variant.pricingValue,
        }),
      ),
    );

    product.specifics = await Promise.all(
      createProductDto.productSpecifics.map((spec) =>
        this.productSpecificRepo.create({
          specific: { id: spec.specificId },
          value: spec.value,
        }),
      ),
    );

    product.descriptions = await Promise.all(
      createProductDto.descriptions.map((desc) =>
        this.productDescriptionRepo.create({
          title: desc.title,
          body: desc.body,
          image: desc.image,
        }),
      ),
    );

    return await this.productRepo.save(product);
  }

  async findAll(
    take: number,
    skip: number,
  ): Promise<{ products: Product[]; total: number }> {
    const [products, total] = await this.productRepo.findAndCount({
      relations: ['colorVariants', 'colorVariants.color'],
      take,
      skip,
    });
    return { products, total };
  }
  async findWithDetails(id: number): Promise<Product> {
    return await this.productRepo.findOne({
      where: { id: id },
      relations: [
        'colorVariants',
        'colorVariants.color',
        'specifics',
        'specifics.specific',
        'specifics.specific.category',
        'descriptions',
        'variants',
        'variants.varinat',
        'category',
        'category.parent',
        'brand',
      ],
    });
  }

  async findByCategory(
    categoryId: number,
    brandId: number,
    productName: string,
  ): Promise<Product[]> {
    const whereCluase: FindCondition<Product> = {};
    if (categoryId) {
      const categories = await this.categoryService.findSubordinates(
        categoryId,
      );
      const categoryIds: number[] = categories.map((category) => category.id);
      categoryIds.unshift(categoryId);
      whereCluase.category = { id: In(categoryIds) };
    }
    brandId && (whereCluase.brand = { id: brandId });
    productName && (whereCluase.name = Like(`%${productName}%`));
    return await this.productRepo.find({
      where: whereCluase,
      relations: ['colorVariants', 'colorVariants.color'],
    });
  }
}
