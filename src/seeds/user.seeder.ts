import { User } from '../entities/user.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query('SET FOREIGN_KEY_CHECKS=0');
    await connection.query('TRUNCATE TABLE user');

    faker.locale = 'fa';
    for (let i = 1; i <= 10; i++) {
      const user = {
        phone: faker.phone.number().replace(/\s/g, ''),
        name: faker.name.fullName(),
        email: faker.internet.email(),

        password: faker.internet.password(),
        role: 2,
        address: faker.address.streetAddress(),
      };
      await connection.getRepository(User).save(user);
    }

    const user = {
      phone: '09396777564',
      name: 'وحید نژادمحمودی',
      email: faker.internet.email(),
      password: '123',
      role: 1,
      address: faker.address.streetAddress(),
    };

    const newUser = await connection.getRepository(User).create(user);
    await connection.getRepository(User).save(newUser);

    await connection.query('SET FOREIGN_KEY_CHECKS=1');
  }
}
