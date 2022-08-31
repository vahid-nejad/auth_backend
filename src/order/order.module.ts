import { OrderedProduct } from './../entities/orderedProduct.entity';
import { Order } from './../entities/order.entity';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { PagerMiddleware } from 'src/middlewares/pager.middleware';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [TypeOrmModule.forFeature([Order, OrderedProduct])],
})
export class OrderModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PagerMiddleware).forRoutes({
      path: 'order/user/:id',
      method: RequestMethod.GET,
    });
  }
}
