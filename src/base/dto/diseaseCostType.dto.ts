import { IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateDiseaseCostTypeDto {
  @IsString()
  name: string;
}
export class UpdateDiseaseCostTypeDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
}
