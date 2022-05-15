import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SpecificCategory } from './specificCategory.entity';

@Entity()
@ObjectType()
export class Specific {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
  @Field()
  @Column()
  name: string;

  @Field((type) => SpecificCategory)
  @ManyToOne((type) => SpecificCategory, (cat) => cat.id)
  category: SpecificCategory;
}
