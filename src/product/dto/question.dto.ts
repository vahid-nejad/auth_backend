import { IsObject, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsObject()
  product: {
    id: number;
  };
  @IsObject()
  user: {
    phone: string;
  };

  @IsString()
  body: string;
}
