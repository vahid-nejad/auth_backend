import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InsuranceCompany {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
