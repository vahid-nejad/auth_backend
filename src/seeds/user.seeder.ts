import { User, UserRole } from '../entities/user.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query("SET session_replication_role = 'replica';");

    // await connection.query('truncate user restart identity CASCADE');

    const user = {
      userName: 'admin',
      name: faker.name.firstName(),
      password: '123',
      role: UserRole.Admin,
    };

    await connection.getRepository(User).save(user);

    const user3 = {
      userName: 'user',
      name: faker.name.firstName(),
      password: '123',
      role: UserRole.User,
    };

    await connection.getRepository(User).save(user3);

    await connection.query("SET session_replication_role = 'origin';");
  }
}
