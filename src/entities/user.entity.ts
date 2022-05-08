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
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password?: string;
  @Column()
  phone?: string;
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
