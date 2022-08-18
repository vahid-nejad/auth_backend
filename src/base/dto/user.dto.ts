import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  phone: string;
  @IsString()
  password: string;

  @IsString()
  name: string;
}
