import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Color {
  @Field()
  @PrimaryColumn()
  code: string;

  @Field()
  @Column()
  name: string;
}
