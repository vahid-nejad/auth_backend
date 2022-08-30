import { OrderedProduct } from './../entities/orderedProduct.entity';
import { Order } from './../entities/order.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [TypeOrmModule.forFeature([Order, OrderedProduct])],
})
export class OrderModule {}
