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

  async countByProductID(productID: number) {
    return await this.questionRepo.count({ product: { id: productID } });
  }

  async create(createQuestionDto: CreateQuestionDto) {
    const question = this.questionRepo.create(createQuestionDto);
    question.date = new Date();
    console.log(question);

    return await this.questionRepo.save(question);
  }
  async findAllByProductID(
    productid: number,
    take: number,
    skip: number,
  ): Promise<Question[]> {
    return await this.questionRepo.find({
      where: { product: { id: productid } },
      relations: ['user'],
      take,
      skip,
    });
  }
}
