import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Product } from './product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Answer } from './answer.entity';
import { User } from './user.entity';

@Entity()
@ObjectType()
export class Question {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.questions)
  user: User;

  @Field()
  @Column()
  date: Date;

  @Column()
  @Field()
  body: string;

  @Field((type) => [Answer], { nullable: true })
  @OneToMany((type) => Answer, (answer) => answer.question)
  answers: Answer[];

  @Field((type) => Product)
  @ManyToOne((type) => Product, (product) => product.questions)
  product: Product;
}
