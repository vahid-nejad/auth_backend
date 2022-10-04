import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MedicalCenter {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
