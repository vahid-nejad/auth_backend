import { IsNumber, IsString } from 'class-validator';

export class CreatePractitionerExpertiseDto {
  @IsString()
  name: string;
}
export class UpdatePractitionerExpertiseDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
}
