import { Question } from './question.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
@Entity()
@ObjectType()
export class Answer {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.answers, {
    nullable: false,
  })
  user?: User;

  @Field((type) => Question)
  @ManyToOne((type) => Question, (question) => question.answers, {
    nullable: false,
  })
  question?: Question;

  @Field()
  @Column()
  date?: Date;

  @Field({ nullable: true })
  @Column('longtext')
  body?: string;

  @Field()
  @Column({ default: 0 })
  likeNum?: number;

  @Field()
  @Column({ default: 0 })
  dislikeNum?: number;
}
