import { type } from 'os';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Answer } from './answer.entity';
import { Brand } from './brand.entity';
import { Comment } from './comment.entity';
import { ProductCategory } from './productCategory.entity';
import { ProductColorVariant } from './productColorVariant.entity';
import { ProductDescription } from './productDescription.entity';
import { ProductSpecific } from './productSpecific.entity';
import { ProductVariant } from './productVariant.entity';
import { Question } from './question.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name?: string;
  @Column('json')
  images?: string[];
  @Column()
  cardImage?: string;

  @OneToMany(
    (type) => ProductColorVariant,
    (productColorVariant) => productColorVariant.product,
    {
      cascade: true,
    },
  )
  colorVariants?: ProductColorVariant[];

  @OneToMany(
    (type) => ProductVariant,
    (productVariant) => productVariant.product,
    {
      cascade: true,
    },
  )
  variants?: ProductVariant[];

  @OneToMany(
    (type) => ProductSpecific,
    (productSpecific) => productSpecific.product,
    {
      cascade: true,
    },
  )
  specifics?: ProductSpecific[];

  @ManyToOne(
    (type) => ProductCategory,
    (productCategory) => productCategory.products,
  )
  category?: ProductCategory;

  @ManyToOne((type) => Brand, (brand) => brand.products)
  brand?: Brand;

  @OneToMany(
    (type) => ProductDescription,
    (productDescription) => productDescription.product,
    {
      cascade: true,
    },
  )
  @OneToMany(
    (type) => ProductDescription,
    (productDescription) => productDescription.product,
  )
  descriptions: ProductDescription[];

  @OneToMany((type) => Comment, (comment) => comment.product)
  comments?: Comment[];
  @OneToMany((type) => Question, (question) => question.product)
  questions?: Question[];
  @OneToMany((type) => Answer, (answer) => answer.product)
  answers?: Answer[];
}
