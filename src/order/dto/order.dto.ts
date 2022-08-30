import { OrderStatus } from './../../entities/order.entity';
import { OrderedProduct } from './../../entities/orderedProduct.entity';
import { OrderedProductDto } from './orderedProduct.dto';
import { IsNumber, IsObject } from 'class-validator';

export class CreateOrderDto {
  @IsObject()
  buyer: {
    id: number;
  };

  @IsObject({ each: true })
  oderedProducts: OrderedProductDto[];

  @IsNumber()
  status: OrderStatus;
}
