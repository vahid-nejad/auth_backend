import { Answer } from 'src/entities/answer.entity';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { AnswerService } from './answer.service';

@Resolver((of) => Answer)
export class AnswerResolver {
  constructor(private AnswerService: AnswerService) {}

  @Query((returns) => [Answer])
  async answer() {
    return await this.AnswerService.findAll();
  }
}
