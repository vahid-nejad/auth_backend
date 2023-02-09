import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import { Post } from '../entities/post.entity';

export default class CreatePost implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query("SET session_replication_role = 'replica';");

    await connection.query('truncate post restart identity CASCADE');

    for (let i = 1; i <= 100; i++) {
      const post = {
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraph(),
        user: { id: Math.ceil(i / 2) },
      };
      await connection.getRepository(Post).save(post);
    }

    await connection.query("SET session_replication_role = 'origin';");
  }
}
