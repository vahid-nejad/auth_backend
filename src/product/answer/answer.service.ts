import { Answer } from 'src/entities/answer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateAnswerDto,
  FindMultiPleQuestionAnswerDto,
} from '../dto/answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepo: Repository<Answer>,
  ) {}

  async findAllQuestionAnswer(questionIDsdto: FindMultiPleQuestionAnswerDto) {
    return await this.answerRepo.find({
      where: {
        question: { id: questionIDsdto.questionIDs },
      },
    });
  }

  async create(createAnswerDto: CreateAnswerDto) {
    const answer = this.answerRepo.create(createAnswerDto);
    answer.date = new Date();

    return await this.answerRepo.save(answer);
  }
  async findAllByQuestionID(
    questionID: number,
    page: number,
    limit: number,
  ): Promise<Answer[]> {
    return await this.answerRepo.find({
      where: { question: { id: questionID } },
      relations: ['user'],
      skip: page * limit,
      take: limit,
    });
  }
  async findAll(): Promise<Answer[]> {
    return await this.answerRepo.find({ relations: ['user', 'question'] });
  }
}
