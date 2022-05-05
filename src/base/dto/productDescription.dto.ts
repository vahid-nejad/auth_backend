import { IsOptional, IsString } from 'class-validator';

export class CreateProductDescriptionDto {
  @IsString()
  title: string;
  @IsString()
  body: string;
  @IsOptional()
  @IsString()
  image: string;
}
