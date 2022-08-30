import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
    return this.categoryService.create(createProductCategoryDto);
  }
  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.categoryService.findSubordinates(id);
  }

  @Get('/roots/all')
  findRootCategories() {
    return this.categoryService.findRootCategories();
  }
}
