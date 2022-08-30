import { IsNumber, IsObject, IsString } from 'class-validator';
import { CreateQuestionDto } from './question.dto';
export class CreateAnswerDto {
  @IsObject()
  question: {
    id: number;
  };
  @IsObject()
  user: {
    id: number;
  };

  @IsString()
  body: string;
}

export class FindMultiPleQuestionAnswerDto {
  @IsNumber({}, { each: true })
  questionIDs: number[];
}
