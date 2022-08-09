import { Specific } from '../entities/specific.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateSpecific implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query('SET FOREIGN_KEY_CHECKS=0');
    await connection.query('TRUNCATE TABLE specifics');
    await connection.getRepository(Specific).save([
      {
        category: { id: 1 },
        name: 'ابعاد',
      },
      {
        category: { id: 1 },
        name: 'وزن',
      },
      {
        category: { id: 2 },
        name: 'سری پردازنده',
      },
      {
        category: { id: 2 },
        name: 'سازنده پردازنده',
      },
    ]);
    await connection.query('SET FOREIGN_KEY_CHECKS=1');
  }
}
