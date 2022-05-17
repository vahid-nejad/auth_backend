import { AnswerService } from './../answer/answer.service';
import {
  Query,
  Resolver,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Question } from 'src/entities/question.entity';
import { QuestionService } from './question.service';
@Resolver((of) => Question)
export class QuestionResolver {
  constructor(
    private questionService: QuestionService,
    private readonly answerService: AnswerService,
  ) {}

  @Query((returns) => [Question])
  async questions(
    @Args('productID', { type: () => Int }) productID: number,
    @Args('page', { type: () => Int }) page: number,
    @Args('limit', { type: () => Int }) limit: number,
  ) {
    return await this.questionService.findAllByProductID(
      productID,
      page,
      limit,
    );
  }

  @ResolveField()
  async answers(@Parent() question: Question) {
    const { id } = question;
    return this.answerService.findAllByQuestionID(id);
  }
}
