import { Field, Int, ObjectType } from '@nestjs/graphql';
import { type } from 'os';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { Specific } from './specific.entity';

@Entity()
@ObjectType()
export class ProductSpecific {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id?: number;

  @Field((type) => Specific)
  @ManyToOne((type) => Specific, (spec) => spec.id)
  specific: Specific;

  @Field()
  @Column()
  value: string;

  @Field((type) => Product)
  @ManyToOne((type) => Product, (product) => product.specifics)
  product: Product;
}
