import { FindMultiPleQuestionAnswerDto } from './../dto/answer.dto';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateAnswerDto } from '../dto/answer.dto';
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get(':id')
  findAllByQuestionID(@Param('id') questionID: number) {
    return this.answerService.findAllByQuestionID(questionID);
  }

  @Post('/all')
  findAllQuestionAnswer(@Body() questionIDsdto: FindMultiPleQuestionAnswerDto) {
    return this.answerService.findAllQuestionAnswer(questionIDsdto);
  }

  @Get('/all')
  findAll() {
    return this.answerService.findAll();
  }
  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.create(createAnswerDto);
  }
}
