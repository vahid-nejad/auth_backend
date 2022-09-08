import { Order } from './../entities/order.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly orderRepo: Repository<Order>,
  ) {}

  async find(orderId: number) {
    return await this.orderRepo.findOne({
      where: {
        id: orderId,
      },
      relations: ['orderedProducts', 'orderedProducts.product', 'buyer'],
    });
  }

  async getUserOrders(
    userId: number,
    status: number,
    take: number,
    skip: number,
  ) {
    const [orders, count] = await this.orderRepo.findAndCount({
      where: {
        buyer: { id: userId },
        status: status,
      },
      take: take,
      skip: skip,
      relations: ['orderedProducts', 'orderedProducts.product'],
    });

    return { orders, count };
  }
}
