import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Color } from './color.entity';
import { Product } from './product.entity';

@Entity()
@ObjectType()
export class ProductColorVariant {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Color)
  @ManyToOne((type) => Color, (color) => color.code)
  color: Color;

  @Field((type) => Int)
  @Column()
  price: number;

  @Field((type) => Int, { nullable: true })
  @Column()
  discount?: number;

  @Field((type) => Int)
  @Column()
  stock: number;

  @Field((type) => Product)
  @ManyToOne((type) => Product, (product) => product.colorVariants)
  product: Product;
}
