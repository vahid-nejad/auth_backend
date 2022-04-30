import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SpecificCategory {
   @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
  }