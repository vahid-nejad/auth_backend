import { Order } from '../entities/order.entity';
import { CreateOrderDto } from './../order/dto/order.dto';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class orderSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query('SET FOREIGN_KEY_CHECKS=0');
    await connection.query('TRUNCATE TABLE orders');
    await connection.query('TRUNCATE TABLE ordered_product');

    for (let i = 1; i <= 30; i++) {
      const order: CreateOrderDto = {
        buyer: {
          id: 11,
        },
        orderedProducts: [
          {
            product: {
              id: Math.floor(Math.random() * 100) + 1,
            },
            color: {
              code: '#ffffff',
            },
            price: Math.round(Math.random() * 1000) * 1000,
            discount: Math.floor(Math.random() * 1000) + 1,
            qty: Math.floor(Math.random() * 9) + 1,
            selectedAddOns: [],
          },
          {
            product: {
              id: Math.floor(Math.random() * 100) + 1,
            },
            color: {
              code: '#ffffff',
            },
            price: Math.round(Math.random() * 1000) * 1000,
            discount: Math.floor(Math.random() * 100000) + 1,
            qty: Math.floor(Math.random() * 9) + 1,
            selectedAddOns: [],
          },
          {
            product: {
              id: Math.floor(Math.random() * 100) + 1,
            },
            color: {
              code: '#ffffff',
            },
            price: Math.round(Math.random() * 1000) * 1000,
            discount: Math.floor(Math.random() * 100000) + 1,
            qty: Math.floor(Math.random() * 9) + 1,
            selectedAddOns: [],
          },
          {
            product: {
              id: Math.floor(Math.random() * 100) + 1,
            },
            color: {
              code: '#ffffff',
            },
            price: Math.round(Math.random() * 1000) * 1000,
            discount: Math.floor(Math.random() * 100000) + 1,
            qty: Math.floor(Math.random() * 9) + 1,
            selectedAddOns: [],
          },
          {
            product: {
              id: Math.floor(Math.random() * 100) + 1,
            },
            color: {
              code: '#ffffff',
            },
            price: Math.round(Math.random() * 1000) * 1000,
            discount: Math.floor(Math.random() * 100000) + 1,
            qty: Math.floor(Math.random() * 9) + 1,
            selectedAddOns: [],
          },
          {
            product: {
              id: Math.floor(Math.random() * 100) + 1,
            },
            color: {
              code: '#ffffff',
            },
            price: Math.round(Math.random() * 1000) * 1000,
            discount: Math.floor(Math.random() * 100000) + 1,
            qty: Math.floor(Math.random() * 9) + 1,
            selectedAddOns: [],
          },
          {
            product: {
              id: Math.floor(Math.random() * 100) + 1,
            },
            color: {
              code: '#ffffff',
            },
            price: Math.round(Math.random() * 1000) * 1000,
            discount: Math.floor(Math.random() * 100000) + 1,
            qty: Math.floor(Math.random() * 9) + 1,
            selectedAddOns: [],
          },
          {
            product: {
              id: Math.floor(Math.random() * 100) + 1,
            },
            color: {
              code: '#ffffff',
            },
            price: Math.round(Math.random() * 1000) * 1000,
            discount: Math.floor(Math.random() * 100000) + 1,
            qty: Math.floor(Math.random() * 9) + 1,
            selectedAddOns: [],
          },
          {
            product: {
              id: Math.floor(Math.random() * 100) + 1,
            },
            color: {
              code: '#ffffff',
            },
            price: Math.round(Math.random() * 1000) * 1000,
            discount: Math.floor(Math.random() * 100000) + 1,
            qty: Math.floor(Math.random() * 9) + 1,
            selectedAddOns: [],
          },
        ],
        status: Math.round(Math.random() * 3),
      };

      const tempOrder = await connection.getRepository(Order).create(order);

      await connection.getRepository(Order).save(tempOrder);
    }

    await connection.query('SET FOREIGN_KEY_CHECKS=1');
  }
}
