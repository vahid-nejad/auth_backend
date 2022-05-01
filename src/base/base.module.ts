import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/entities/brand.entity';
import { Color } from 'src/entities/color.entity';
import { ProductCategory } from 'src/entities/productCategory.entity';
import { ProductColorVariant } from 'src/entities/productColorVariant.entity';
import { ProductSpecific } from 'src/entities/productSpecific.entity';
import { ProductVariant } from 'src/entities/productVariant.entity';
import { ProductVariantPrototype } from 'src/entities/productVariantPrototype.entity';
import { Specific } from 'src/entities/specific.entity';
import { SpecificCategory } from 'src/entities/specificCategory.entity';
import { BaseController } from './base.controller';
import { BrandController } from './brand/brand.controller';
import { BrandService } from './brand/brand.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';

@Module({  
  controllers: [ BaseController, BrandController, CategoryController],
  imports: [TypeOrmModule.forFeature([Brand,Color,ProductCategory,ProductColorVariant,ProductSpecific,ProductVariant,ProductVariantPrototype,Specific,SpecificCategory])],
  providers: [BrandService, CategoryService],
  
})
export class BaseModule {}
