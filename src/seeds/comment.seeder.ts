import { CreateCommentDto } from './../product/dto/comment.dto';
import { Comment } from '../entities/comment.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';

export default class CommentSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query('SET FOREIGN_KEY_CHECKS=0');
    await connection.query('TRUNCATE TABLE comment');
    await connection.query('TRUNCATE TABLE comment_point');
    await connection.query('TRUNCATE TABLE comment_score');

    faker.locale = 'fa';
    for (let i = 1; i <= 30; i++) {
      const comment: CreateCommentDto = {
        user: {
          phone: '09396777564',
        },
        product: {
          id: 1,
        },

        body: faker.lorem.sentence(),
        title: faker.lorem.words(),
        score: {
          design: Math.floor(Math.random() * 5) + 1,
          physicalBeauty: Math.floor(Math.random() * 5) + 1,
          performance: Math.floor(Math.random() * 5) + 1,
          valueByPrice: Math.floor(Math.random() * 5) + 1,
        },
        points: Array(5)
          .fill(0)
          .map((item, index) => {
            return {
              text: faker.lorem.words(3),
              isPositive: Math.random() >= 0.5,
            };
          }),
      };
      const tempComment = await connection
        .getRepository(Comment)
        .create(comment);
      tempComment.date = new Date();
      await connection.getRepository(Comment).save(tempComment);
    }

    await connection.query('SET FOREIGN_KEY_CHECKS=1');
  }
}
