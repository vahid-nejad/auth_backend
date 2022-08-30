import { OrderedProduct } from './orderedProduct.entity';
import { User } from './user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User)
  buyer: User;

  @OneToMany((type) => OrderedProduct, (orderedProduct) => orderedProduct.order)
  orderedProducts: OrderedProduct[];

  @Column()
  status: OrderStatus;
}
export enum OrderStatus {
  waitingForPayment = 0,
  delivered = 1,
  canceled = 2,
}
