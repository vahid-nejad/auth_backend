import { Product } from 'src/entities/product.entity';
import { IsNumber, IsObject, IsOptional } from 'class-validator';

export class OrderedProductDto {
  @IsObject()
  product: {
    id: number;
  };

  @IsObject()
  color: {
    code: string;
  };

  @IsObject({ each: true })
  selectedAddOns: {
    id: number;
  }[];

  @IsNumber()
  price: number;

  @IsNumber()
  @IsOptional()
  discount?: number;

  @IsNumber()
  qty: number;
}
