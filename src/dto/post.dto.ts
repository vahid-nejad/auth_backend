import { IsObject, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsObject()
  user: {
    id: number;
  };
}
