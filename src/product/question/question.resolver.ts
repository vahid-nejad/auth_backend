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

  @Query((returns) => Number)
  async countQuestions(
    @Args('productID', { type: () => Int }) productID: number,
  ) {
    return await this.questionService.countByProductID(productID);
  }

  @Query((returns) => [Question])
  async questions(
    @Args('productID', { type: () => Int }) productID: number,
    @Args('take', { type: () => Int }) take: number,
    @Args('skip', { type: () => Int }) skip: number,
  ) {
    return await this.questionService.findAllByProductID(productID, take, skip);
  }

  @ResolveField()
  async answers(@Parent() question: Question) {
    const { id } = question;
    return this.answerService.findAllByQuestionID(id);
  }
}
