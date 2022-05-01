import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductCategoryDto } from '../dto/productCategory.dto';
import { CategoryService } from './category.service';

@Controller('base/product-category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}   

    @Get()
    findAll() {
        return this.categoryService.findAll();
    }

    @Post()
    create(@Body() createProductCategoryDto:CreateProductCategoryDto){
        
        return this.categoryService.create(createProductCategoryDto)
    }
}
