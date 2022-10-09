import { IsNumber, IsString } from 'class-validator';

export class CreatePhysicianExpertiseDto {
  @IsString()
  name: string;
}
export class UpdatePhysicianExpertiseDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
}
