import { User } from '../entities/user.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query("SET session_replication_role = 'replica';");

    // await connection.query('truncate user restart identity CASCADE');

    for (let i = 1; i <= 10; i++) {
      const user = {
        userName: faker.internet.email(),
        name: faker.name.firstName(),
        password: faker.internet.password(),
      };
      await connection.getRepository(User).save(user);
    }

    await connection.query("SET session_replication_role = 'origin';");
  }
}
