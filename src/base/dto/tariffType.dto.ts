import { IsNumber, IsString } from 'class-validator';

export class CreateTariffTypeDto {
  @IsString()
  name: string;
}
export class UpdateTariffTypeDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
}
