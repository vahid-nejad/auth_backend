import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name?: string;
  @OneToMany((type) => ProductCategory, (category) => category.parent)
  childeren?: ProductCategory[];
  @ManyToOne((type) => ProductCategory, (category) => category.childeren)
  parent?: ProductCategory;

  @OneToMany((type) => Product, (product) => product.category)
  products?: Product[];
}
