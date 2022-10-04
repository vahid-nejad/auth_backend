import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToothNum {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
