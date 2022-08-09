import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Brand } from '../entities/brand.entity';
export default class CreateBrand implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query('SET FOREIGN_KEY_CHECKS=0');
    await connection.query('TRUNCATE TABLE brand');

    await connection.getRepository(Brand).save([
      {
        name: 'سامسونگ',
      },
      {
        name: 'هواوی',
      },
      {
        name: 'شیائومی',
      },
      {
        name: 'ال جی',
      },
      {
        name: 'ایسوس',
      },
      {
        name: 'ایرانسل',
      },
      {
        name: 'اپل',
      },
    ]);
    await connection.query('SET FOREIGN_KEY_CHECKS=1');
  }
}
