import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
export class CreateBrandDto {
  @IsString()
  name: string;
}

export class UpdateBrandDto extends CreateBrandDto {
  @IsNumber()
  id: number;
}
