import { type } from 'os';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @OneToMany((type) => Product, (product) => product.brand)
  products?: Product[];
}
