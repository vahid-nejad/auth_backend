import { IsNumber, IsString } from 'class-validator';

export class CreateToothDto {
  @IsString()
  name: string;
}
export class UpdateToothDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
}
