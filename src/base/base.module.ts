import { DeliveryMethod } from './../entities/delivery.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/entities/brand.entity';
import { Color } from 'src/entities/color.entity';
import { ProductCategory } from 'src/entities/productCategory.entity';
import { ProductColorVariant } from 'src/entities/productColorVariant.entity';
import { ProductSpecific } from 'src/entities/productSpecific.entity';
import { AddOn } from 'src/entities/addOn.entity';
import { AddOnPrototype } from 'src/entities/addOnPrototype.entity';
import { Specific } from 'src/entities/specific.entity';
import { SpecificCategory } from 'src/entities/specificCategory.entity';
import { BaseController } from './base.controller';
import { BrandController } from './brand/brand.controller';
import { BrandService } from './brand/brand.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { ColorController } from './color/color.controller';
import { ColorService } from './color/color.service';
import { SpecificController } from './specific/specific.controller';
import { SpecificService } from './specific/specific.service';
import { VariantController } from './variant/variant.controller';
import { VariantService } from './variant/variant.service';
import { DeliveryMethodController } from './delivery-method/delivery-method.controller';
import { DeliveryMethodService } from './delivery-method/delivery-method.service';

@Module({
  controllers: [
    BaseController,
    BrandController,
    CategoryController,
    ColorController,
    SpecificController,
    VariantController,
    DeliveryMethodController,
  ],
  imports: [
    TypeOrmModule.forFeature([
      Brand,
      Color,
      ProductCategory,
      ProductColorVariant,
      ProductSpecific,
      AddOn,
      AddOnPrototype,
      Specific,
      SpecificCategory,
      DeliveryMethod,
    ]),
  ],
  providers: [
    BrandService,
    CategoryService,
    ColorService,
    SpecificService,
    VariantService,
    DeliveryMethodService,
  ],
  exports: [CategoryService],
})
export class BaseModule {}
