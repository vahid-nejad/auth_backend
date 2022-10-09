import { IsNumber, IsString } from 'class-validator';

export class CreateInsuranceCompanyDto {
  @IsString()
  name: string;
}
export class UpdateInsuranceCompanyDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
}
