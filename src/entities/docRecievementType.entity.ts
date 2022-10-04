import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DocRecievementType {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
