import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SpecificCategory } from "./specificCategory.entity";

@Entity()
export class Specific {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @ManyToOne(type=>SpecificCategory,cat=>cat.id)
    category: SpecificCategory;
  }