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
@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User, (user) => user.answers, {
    nullable: false,
  })
  user: User;

  @ManyToOne((type) => Question, (question) => question.answers, {
    nullable: false,
  })
  question: Question;
  @Column()
  date: Date;
  @Column()
  body: string;
  @Column()
  likeNum: number;
  @Column()
  dislikeNum: number;
}
