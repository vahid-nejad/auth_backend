import { type } from 'os';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { Specific } from './specific.entity';

@Entity()
export class ProductSpecific {
  @PrimaryGeneratedColumn()
  id?: number;
  @ManyToOne((type) => Specific, (spec) => spec.id)
  specific: Specific;
  @Column()
  value: string;
  @ManyToOne((type) => Product, (product) => product.specifics)
  product: Product;
}
