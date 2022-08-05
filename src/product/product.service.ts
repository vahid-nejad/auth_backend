import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { retry } from 'rxjs';
import { CreateProductVariantProtoTypeDto } from 'src/base/dto/productVariantProtoType.dto';
import { Product } from 'src/entities/product.entity';
import { ProductColorVariant } from 'src/entities/productColorVariant.entity';
import { ProductDescription } from 'src/entities/productDescription.entity';
import { ProductSpecific } from 'src/entities/productSpecific.entity';
import { ProductVariant } from 'src/entities/productVariant.entity';
import { Repository } from 'typeorm';
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

  async findAll(): Promise<Product[]> {
    return await this.productRepo.find({
      relations: ['colorVariants', 'colorVariants.color'],
    });
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
}
