import { User } from './src/entities/user.entity';
import { Post } from './src/entities/post.entity';

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions & {
  seeds: string[];
  factories: string[];
} = {
  type: 'postgres',
  database: 'testDB',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  port: 5432,
  entities: [User, Post],

  seeds: ['./src/seeds/**/*{.ts,.js}'],
  factories: ['./src/factories/**/*{.ts,.js}'],

  synchronize: true,
};

export default config;
