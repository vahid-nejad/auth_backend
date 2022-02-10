import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mariadb',
  database: 'sakura',
  host: 'localhost',
  username: 'root',
  password: '',
  port: 3306,
  entities: [],
  synchronize: true,
};

export default config;
