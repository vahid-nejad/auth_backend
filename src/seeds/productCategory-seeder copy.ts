import { ProductCategory } from '../entities/productCategory.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateCategory implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query('SET FOREIGN_KEY_CHECKS=0');
    await connection.query('TRUNCATE TABLE product_category');

    await connection.getRepository(ProductCategory).save([
      {
        name: 'همه دسته بندی ها',
        id: 1,
      },
      {
        name: 'کالای دیجیتال',
        parent: { id: 1 },
        id: 2,
      },
      {
        name: 'موبایل',
        parent: { id: 2 },
        id: 3,
      },
      {
        name: 'گوشی موبایل',
        parent: { id: 3 },
        id: 4,
      },
      {
        name: 'لوازم جانبی',
        parent: { id: 3 },
        id: 5,
      },
      {
        name: 'تبلت و کتاب خوان',
        parent: { id: 2 },
        id: 6,
      },
      {
        name: 'تبلت',
        parent: { id: 6 },
        id: 7,
      },
      {
        name: 'لوازم جانبی',
        parent: { id: 6 },
        id: 8,
      },
      {
        name: 'لپ تاپ',
        parent: { id: 2 },
        id: 9,
      },
      {
        name: 'لپ تاپ و الترابوک',
        parent: { id: 9 },
        id: 10,
      },
      {
        name: 'لوازم جانبی لپ تاپ',
        parent: { id: 9 },
        id: 11,
      },
    ]);
    await connection.query('SET FOREIGN_KEY_CHECKS=1');
  }
}
