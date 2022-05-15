import { Field, Int, ObjectType } from '@nestjs/graphql';
import { type } from 'os';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
@ObjectType()
export class Brand {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  name?: string;

  @Field((type) => [Product])
  @OneToMany((type) => Product, (product) => product.brand)
  products?: Product[];
}
