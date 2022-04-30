import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Color {
  @PrimaryColumn()
  code: string;
  @Column()
  name: string;
  }