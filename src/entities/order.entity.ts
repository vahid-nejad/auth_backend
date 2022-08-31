import { OrderedProduct } from './orderedProduct.entity';
import { User } from './user.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
@Entity('orders')
export class Order {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column({ nullable: true })
  date: Date;

  @Field((type) => User)
  @ManyToOne((type) => User)
  buyer: User;

  @Field((type) => [OrderedProduct])
  @OneToMany(
    (type) => OrderedProduct,
    (orderedProduct) => orderedProduct.order,
    {
      cascade: true,
    },
  )
  orderedProducts: OrderedProduct[];
  @Field()
  @Column()
  status: OrderStatus;

  @BeforeInsert()
  async addDate() {
    this.date = new Date();
  }
}
export enum OrderStatus {
  current = 0,
  delivered = 1,
  returned = 2,
  canceled = 3,
}
