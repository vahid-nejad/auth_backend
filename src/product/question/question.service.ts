import { Question } from 'src/entities/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const question = this.questionRepo.create(createQuestionDto);
    question.date = new Date();

    return await this.questionRepo.save(question);
  }
  async findAllByProductID(
    productid: number,
    page: number,
    limit: number,
  ): Promise<Question[]> {
    return await this.questionRepo.find({
      where: { product: { id: productid } },
      relations: ['user:{id}'],
      skip: page * limit,
      take: limit,
    });
  }
}
