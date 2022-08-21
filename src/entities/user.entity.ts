import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  BeforeInsert,
  PrimaryColumn,
  Index,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Answer } from './answer.entity';
import { City } from './city.entity';
import { Comment } from './comment.entity';
import { Question } from './question.entity';

@Entity()
@ObjectType()
export class User {
  @Field((type) => String)
  @PrimaryColumn()
  @Index()
  phone: string;

  @Field()
  @Column()
  name?: string;

  @Field()
  @Column({ nullable: true })
  email?: string;

  @Field()
  @Column()
  password?: string;

  @Field()
  @Column({ nullable: true })
  address?: string;

  @ManyToOne((type) => City, (city) => city.id, { nullable: true })
  city?: City;

  @Field()
  @Column({ nullable: true })
  zip?: string;

  @Field()
  @Column({ default: 2 })
  role?: UserRole;
  @OneToMany((type) => Comment, (comment) => comment.user)
  comments?: Comment[];
  @OneToMany((type) => Question, (question) => question.user)
  questions?: Question[];
  @OneToMany((type) => Answer, (answer) => answer.user)
  answers?: Answer[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
export enum UserRole {
  Admin = 1,
  User = 2,
}
