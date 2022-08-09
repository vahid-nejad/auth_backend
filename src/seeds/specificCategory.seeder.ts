import { SpecificCategory } from '../entities/specificCategory.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateSepcificCategory implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query('SET FOREIGN_KEY_CHECKS=0');
    await connection.query('TRUNCATE TABLE specific_category');
    await connection.getRepository(SpecificCategory).save([
      {
        name: 'مشخصات فیزیکی',
      },
      {
        name: 'پردازنده',
      },
      {
        name: 'حافظه رم',
      },
      {
        name: 'حافظه داخلی',
      },
      {
        name: 'پردازنده گرافیکی',
      },
      {
        name: 'صفحه نمایش',
      },
      {
        name: 'امکانات',
      },
      {
        name: 'سایر مشخصات',
      },
    ]);
    await connection.query('SET FOREIGN_KEY_CHECKS=1');
  }
}
