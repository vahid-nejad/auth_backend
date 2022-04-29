import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';


import { Product } from './entities/product.entity';

const config:MysqlConnectionOptions = {
  type: 'mariadb',
  database: 'sakura',
  host: 'localhost',
  username: 'root',
  password: '',
  port: 3306,
 autoLoadEntities:true
  ,
  synchronize: true,
};

export default config;
