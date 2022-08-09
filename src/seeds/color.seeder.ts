import { Color } from '../entities/color.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateColor implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query('SET FOREIGN_KEY_CHECKS=0');
    await connection.query('TRUNCATE TABLE color');
    await connection.getRepository(Color).save([
      {
        code: '#FEFEFE',
        name: 'پیش فرض',
      },
      {
        code: '#ffffff',
        name: 'سفید',
      },
      {
        code: '#FF3131',
        name: 'قرمز',
      },
      {
        code: '#FF8F31',
        name: 'نارنجی',
      },
      {
        code: '#FFCA31',
        name: 'خردلی',
      },
      {
        code: '#FFEC31',
        name: 'زرد',
      },
      {
        code: '#CAFF31',
        name: 'سبز فسفری',
      },
      {
        code: '#44FF31',
        name: 'سبز',
      },
      {
        code: '#31FFD3',
        name: 'فیروزه ای',
      },
      {
        code: '#319BFF',
        name: 'آبی',
      },
      {
        code: '#6631FF',
        name: 'بنفش',
      },
      {
        code: '#FF31FC',
        name: 'صورتی',
      },
    ]);
    await connection.query('SET FOREIGN_KEY_CHECKS=1');
  }
}
