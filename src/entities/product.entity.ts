import { type } from 'os';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Brand } from './brand.entity';
import { ProductCategory } from './productCategory.entity';
import { ProductColorVariant } from './productColorVariant.entity';
import { ProductSpecific } from './productSpecific.entity';
import { ProductVariant } from './productVariant.entity';

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

  @OneToMany(type=>ProductColorVariant, productColorVariant=>productColorVariant.product)
  colorVariants?: ProductColorVariant[];

  @OneToMany(type=>ProductVariant, productVariant=>productVariant.product)
  variants?: ProductVariant[];

@OneToMany(type=>ProductSpecific, productSpecific=>productSpecific.product)
  specifics?: ProductSpecific[];

  @ManyToOne(type=>ProductCategory, productCategory=>productCategory.products)
  category?: ProductCategory;

  @ManyToOne(type=>Brand, brand=>brand.products)
  brand?: Brand;
}
