import { IsNumber, IsString } from 'class-validator';

export class CreateProductColorVariantDto {
  @IsString()
  colorCode: string;
  @IsNumber()
  price: number;
  @IsNumber()
  discount: number;
  @IsNumber()
  stock: number;
}
