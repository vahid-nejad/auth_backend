import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
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
  @Column({ nullable: true })
  phone?: string;

  @Field()
  @Column({ nullable: true })
  address?: string;

  @ManyToOne((type) => City, (city) => city.id, { nullable: true })
  city?: City;

  @Field()
  @Column({ nullable: true })
  zip?: string;

  @Field()
  @Column()
  role: UserRole;
  @OneToMany((type) => Comment, (comment) => comment.user)
  comments?: Comment[];
  @OneToMany((type) => Question, (question) => question.user)
  questions?: Question[];
  @OneToMany((type) => Answer, (answer) => answer.user)
  answers?: Answer[];

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
export enum UserRole {
  Admin = 1,
  User = 2,
}
