import { User } from '../entities/user.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query('SET FOREIGN_KEY_CHECKS=0');
    await connection.query('TRUNCATE TABLE user');

    const users = [];
    faker.locale = 'fa';
    for (let i = 1; i <= 10; i++) {
      users.push({
        phone: faker.phone.phoneNumber().replace(/\s/g, ''),
        name: faker.name.findName(),
        email: faker.internet.email(),

        password: faker.internet.password(),
        role: 1,
      });
    }

    console.log({ users });

    await connection.getRepository(User).save(users);
    await connection.query('SET FOREIGN_KEY_CHECKS=1');
  }
}
