import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Province } from './province.entity';

@Entity()
@ObjectType()
export class City {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((type) => Province)
  @ManyToOne((type) => Province, (province) => province.cities)
  province: Province;
}
