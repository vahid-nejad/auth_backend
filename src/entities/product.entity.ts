import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
