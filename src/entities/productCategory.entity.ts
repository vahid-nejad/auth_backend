import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
@ObjectType()
export class ProductCategory {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  name?: string;

  @Field((type) => [ProductCategory])
  @OneToMany((type) => ProductCategory, (category) => category.parent)
  childeren?: ProductCategory[];

  @Field((type) => ProductCategory)
  @ManyToOne((type) => ProductCategory, (category) => category.childeren)
  parent?: ProductCategory;

  @Field((type) => [Product])
  @OneToMany((type) => Product, (product) => product.category)
  products?: Product[];
}
