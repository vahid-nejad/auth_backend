import { IsNumber, IsObject, IsString } from 'class-validator';
import { Recommandation } from 'src/entities/comment.entity';

export class CreateCommentDto {
  @IsObject()
  user: {
    id: number;
  };
  @IsObject()
  product: {
    id: number;
  };
  @IsString()
  title: string;
  @IsString()
  body: string;
  @IsNumber()
  recommandation: Recommandation;
}
