import { CreateQuestionDto } from './../dto/question.dto';
import { QuestionService } from './question.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get(':id')
  findAllByProductID(
    @Param('id') productId: number,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.questionService.findAllByProductID(productId, page, limit);
  }

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }
}
