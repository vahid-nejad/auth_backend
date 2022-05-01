import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategory } from 'src/entities/productCategory.entity';
import { Repository } from 'typeorm';
import { CreateProductCategoryDto } from '../dto/productCategory.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(ProductCategory) private readonly categoryRepository:Repository<ProductCategory>  ) {}

    findAll() {
        return this.categoryRepository.find({
            relations:['parent']
        });
    }

    async create(createProductCategoryDto:CreateProductCategoryDto){
        let productCategory=this.categoryRepository.create({ name:createProductCategoryDto.name, parent:{id:createProductCategoryDto.parentId}});
        productCategory= await this.categoryRepository.save(productCategory); 
        return await this.categoryRepository.findOne({
            where:{
            id:productCategory.id
        },
    relations:['parent']}
         )
    }
}
