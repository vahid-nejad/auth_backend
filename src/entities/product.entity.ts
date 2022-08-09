import { Field, Int, ObjectType } from '@nestjs/graphql';

import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Brand } from './brand.entity';
import { Comment } from './comment.entity';
import { ProductCategory } from './productCategory.entity';
import { ProductColorVariant } from './productColorVariant.entity';
import { ProductDescription } from './productDescription.entity';
import { ProductSpecific } from './productSpecific.entity';
import { ProductVariant } from './productVariant.entity';
import { Question } from './question.entity';

@Entity()
@ObjectType()
export class Product {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  name?: string;

  @Field((type) => [String], { nullable: true })
  @Column('json')
  images?: string[];

  @Field({ nullable: true })
  @Column()
  cardImage?: string;

  @Field((type) => [ProductColorVariant])
  @OneToMany(
    (type) => ProductColorVariant,
    (productColorVariant) => productColorVariant.product,
    {
      cascade: true,
    },
  )
  colorVariants?: ProductColorVariant[];

  @Field((type) => [ProductVariant], { nullable: true })
  @OneToMany(
    (type) => ProductVariant,
    (productVariant) => productVariant.product,
    {
      cascade: true,
    },
  )
  variants?: ProductVariant[];

  @Field((type) => [ProductSpecific], { nullable: true })
  @OneToMany(
    (type) => ProductSpecific,
    (productSpecific) => productSpecific.product,
    {
      cascade: true,
    },
  )
  specifics?: ProductSpecific[];

  @Field((type) => ProductCategory)
  @ManyToOne(
    (type) => ProductCategory,
    (productCategory) => productCategory.products,
  )
  category?: ProductCategory;

  @Field((type) => Brand)
  @ManyToOne((type) => Brand, (brand) => brand.products)
  brand?: Brand;

  @Field((type) => [ProductDescription])
  @OneToMany(
    (type) => ProductDescription,
    (productDescription) => productDescription.product,
    {
      cascade: true,
    },
  )
  descriptions: ProductDescription[];

  @Field((type) => [Comment], { nullable: true })
  @OneToMany((type) => Comment, (comment) => comment.product)
  comments?: Comment[];

  @Field((type) => [Question], { nullable: true })
  @OneToMany((type) => Question, (question) => question.product)
  questions?: Question[];
}
