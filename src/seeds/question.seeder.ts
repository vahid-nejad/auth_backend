import { Answer } from '../entities/answer.entity';
import { CreateAnswerDto } from './../product/dto/answer.dto';
import { Question } from '../entities/question.entity';
import { CreateQuestionDto } from './../product/dto/question.dto';

import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';

export default class QuestionSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query('SET FOREIGN_KEY_CHECKS=0');
    await connection.query('TRUNCATE TABLE question');
    await connection.query('TRUNCATE TABLE answer');

    faker.locale = 'fa';
    for (let i = 1; i <= 30; i++) {
      const questions: CreateQuestionDto = {
        user: {
          phone: '09396777564',
        },
        product: {
          id: 1,
        },

        body: faker.lorem.words(),
      };
      let tempQuestion = await connection
        .getRepository(Question)
        .create(questions);
      tempQuestion.date = new Date();

      tempQuestion = await connection
        .getRepository(Question)
        .save(tempQuestion);

      for (let j = 1; j <= 3; j++) {
        const answer: CreateAnswerDto = {
          user: {
            phone: '09396777564',
          },

          question: {
            id: tempQuestion.id,
          },
          body: faker.lorem.words(),
        };
        let tempAnswer = await connection.getRepository(Answer).create(answer);
        tempAnswer.date = new Date();
        await connection.getRepository(Answer).save(tempAnswer);
      }
    }

    await connection.query('SET FOREIGN_KEY_CHECKS=1');
  }
}
