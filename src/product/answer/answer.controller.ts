import { FindMultiPleQuestionAnswerDto } from './../dto/answer.dto';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateAnswerDto } from '../dto/answer.dto';
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get(':id')
  findAllByQuestionID(
    @Param('id') questionID: number,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.answerService.findAllByQuestionID(questionID, page, limit);
  }

  @Post('/all')
  findAllQuestionAnswer(@Body() questionIDsdto: FindMultiPleQuestionAnswerDto) {
    return this.answerService.findAllQuestionAnswer(questionIDsdto);
  }

  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.create(createAnswerDto);
  }
}
