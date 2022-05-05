import {
  IsNotEmptyObject,
  IsNumber,
  isObject,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateColorDto } from 'src/base/dto/color.dto';
import { CreateProductColorVariantDto } from 'src/base/dto/productColorVariant.dto';
import { CreateProductDescriptionDto } from 'src/base/dto/productDescription.dto';
import { CreateProductVariantDto } from 'src/base/dto/productVariant.dto';
import { CreateProductSpecificDto } from 'src/base/dto/specific.dto';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsObject({ each: true })
  productVariants: CreateProductVariantDto[];
  @IsObject({ each: true })
  colorVariants: CreateProductColorVariantDto[];
  @IsObject({ each: true })
  productSpecifics: CreateProductSpecificDto[];
  @IsObject({ each: true })
  descriptions: CreateProductDescriptionDto[];
  @IsNumber()
  categoryId: number;
  @IsNumber()
  brandId: number;
  @IsString()
  cardImage: string;
  @IsOptional()
  @IsString({ each: true })
  images: string[];
}
