import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsObject, IsString } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsObject({ always: false })
  city: {
    id: number;
  };

  @IsString({ always: false })
  address: string;

  @IsString()
  tell: string;
}

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
