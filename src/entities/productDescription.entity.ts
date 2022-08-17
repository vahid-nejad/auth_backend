import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
@ObjectType()
export class ProductDescription {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  title?: string;

  @Field()
  @Column('longtext')
  body?: string;

  @Field()
  @Column({ nullable: true })
  image?: string;

  @Field((type) => Product)
  @ManyToOne((type) => Product, (product) => product.descriptions)
  product?: Product;
}
