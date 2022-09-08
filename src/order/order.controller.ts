import { OrderService } from './order.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get(':id')
  async getOrder(@Param('id') orderId: number) {
    return await this.orderService.find(orderId);
  }

  @Get('/user/:id')
  async getUserOrders(
    @Param('id') userId,
    @Query('take') take: number,
    @Query('skip') skip: number,
    @Query('status') status: number,
  ) {
    return await this.orderService.getUserOrders(userId, status, take, skip);
  }
}
