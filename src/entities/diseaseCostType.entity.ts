import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DiseaseCostType {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
