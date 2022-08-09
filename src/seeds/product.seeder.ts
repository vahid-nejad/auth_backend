import { Product } from '../entities/product.entity';

import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateProduct implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query('SET FOREIGN_KEY_CHECKS=0');
    await connection.query('TRUNCATE TABLE product');
    await connection.query('TRUNCATE TABLE product_specific');
    await connection.query('TRUNCATE TABLE product_color_variant');
    for (let i = 0; i < 100; i++) {
      await connection.getRepository(Product).save([
        {
          brand: { id: 1 },
          cardImage: '921bb62db33fd32bf896ca8f9b9488c7',
          images: ['30932c486fc344a377c44822453e52e4'],
          name: 'هدفون سامسونگ',
          category: { id: 5 },
          colorVariants: [
            {
              color: { code: '#FF3131' },
              price: 350000,
              stock: 10,
              discount: 50000,
            },
            {
              color: { code: '#31FFD3' },
              price: 410000,
              stock: 10,
              discount: 50000,
            },
          ],
          specifics: [
            {
              specific: { id: 1 },
              value: '16.9 × 229.9 × 357.8 میلی متر',
            },
          ],
        },
      ]);
    }
    await connection.query('SET FOREIGN_KEY_CHECKS=1');
  }
}
