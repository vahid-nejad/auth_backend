import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductDescription {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  title?: string;
  @Column()
  body?: string;
  @Column()
  image?: string;
  @ManyToOne((type) => Product, (product) => product.descriptions)
  product?: Product;
}
