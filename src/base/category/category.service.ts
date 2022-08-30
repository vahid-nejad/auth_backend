import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategory } from 'src/entities/productCategory.entity';
import { Repository } from 'typeorm';
import { CreateProductCategoryDto } from '../dto/productCategory.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly categoryRepository: Repository<ProductCategory>,
  ) {}

  async findRootCategories() {
    const rootCategories = await this.findChildren(1);

    for (const cate of rootCategories) {
      cate.children = await this.findChildren(cate.id);
      for (const child of cate.children) {
        child.children = await this.findChildren(child.id);
      }
    }

    return rootCategories;
  }

  async findChildren(parntId: number) {
    return await this.categoryRepository.find({
      where: { parent: { id: parntId } },
    });
  }

  findAll() {
    return this.categoryRepository.find({
      relations: ['parent'],
    });
  }

  async create(createProductCategoryDto: CreateProductCategoryDto) {
    let productCategory = this.categoryRepository.create({
      name: createProductCategoryDto.name,
      parent: { id: createProductCategoryDto.parentId },
    });
    productCategory = await this.categoryRepository.save(productCategory);
    return await this.categoryRepository.findOne({
      where: {
        id: productCategory.id,
      },
      relations: ['parent'],
    });
  }

  async findSubordinates(id: number): Promise<ProductCategory[]> {
    const categoryQeue = await this.categoryRepository.find({
      select: ['id'],
      where: { parent: { id } },
    });
    const categorys = await Promise.all(
      categoryQeue.map(async (category) => {
        const subordinates = await this.findSubordinates(category.id);
        categoryQeue.push(...subordinates);
      }),
    );

    return categoryQeue;
  }
}
