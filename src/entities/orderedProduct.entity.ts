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
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class OrderedProduct {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Order)
  @ManyToOne((type) => Order, (order) => order.orderedProducts)
  order: Order;

  @Field((type) => Product)
  @ManyToOne((type) => Product)
  product: Product;

  @Field((type) => Color)
  @ManyToOne((type) => Color)
  color: Color;

  @Field((type) => [AddOnPrototype])
  @ManyToMany((type) => AddOnPrototype)
  selectedAddOns: AddOnPrototype[];

  @Field()
  @Column()
  price: number;

  @Field()
  @Column({ nullable: true })
  discount?: number;

  @Field()
  @Column()
  qty: number;
}
