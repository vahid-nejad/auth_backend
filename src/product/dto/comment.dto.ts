import { IsNumber, IsObject, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsObject()
  user: {
    phone: string;
  };
  @IsObject()
  product: {
    id: number;
  };
  @IsString()
  title: string;
  @IsString()
  body: string;

  @IsObject()
  score: {
    valueByPrice: number;
    design: number;
    physicalBeauty: number;
    performance: number;
  };

  @IsObject({ each: true })
  points: {
    text: string;
    isPositive: boolean;
  }[];
}
