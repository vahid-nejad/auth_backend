import { IsNumber, IsString } from 'class-validator';

export class CreateMedicalCenterDto {
  @IsString()
  name: string;
}
export class UpdateMedicalCenterDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
}
