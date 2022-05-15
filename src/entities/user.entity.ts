import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Answer } from './answer.entity';
import { City } from './city.entity';
import { Comment } from './comment.entity';
import { Question } from './question.entity';

@Entity()
@ObjectType()
export class User {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password?: string;

  @Field()
  @Column()
  phone?: string;

  @Field()
  @Column()
  address?: string;

  @ManyToOne((type) => City, (city) => city.id)
  city?: City;
  @Column()
  zip?: string;
  @Column()
  role: UserRole;
  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[];
  @OneToMany((type) => Question, (question) => question.user)
  questions?: Question[];
  @OneToMany((type) => Answer, (answer) => answer.user)
  answers?: Answer[];
}
export enum UserRole {
  Admin = 1,
  User = 2,
}
