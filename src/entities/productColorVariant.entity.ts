import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Color } from './color.entity';
import { Product } from './product.entity';

@Entity()
export class ProductColorVariant {
  @PrimaryGeneratedColumn()
  id:number
  @ManyToOne(type=>Color, color=>color.code)
  color: Color;
  @Column()
  price: number;
  @Column()
  discount?: number;
  @Column() 
  stock: number;
  @ManyToOne(type => Product, product => product.colorVariants)
  product:Product
  }