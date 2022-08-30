import { Order } from './order.entity';
import { AddOnPrototype } from './addOnPrototype.entity';
import { Color } from './color.entity';

import { Product } from './product.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class OrderedProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Order, (order) => order.orderedProducts)
  order: Order;

  @ManyToOne((type) => Product)
  product: Product;

  @ManyToOne((type) => Color)
  color: Color;

  @ManyToMany((type) => AddOnPrototype)
  selectedAddOns: AddOnPrototype[];

  @Column()
  price: number;

  @Column({ nullable: true })
  dicount?: number;

  @Column()
  qty: number;
}
