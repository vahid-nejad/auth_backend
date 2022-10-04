import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PractitionerExpertise {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
