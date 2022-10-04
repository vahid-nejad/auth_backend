import { IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateDocRecievementTypeDto {
  @IsString()
  name: string;
}
export class UpdateDocRecievementTypeDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
}
