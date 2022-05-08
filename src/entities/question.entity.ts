import { Product } from 'src/entities/product.entity';
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
export class Question {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne((type) => User, (user) => user.questions)
  user: User;
  @Column()
  date: Date;
  @Column()
  body: string;
  @OneToMany((type) => Answer, (answer) => answer.question)
  answers: Answer[];
  @ManyToOne((type) => Product, (product) => product.questions)
  product: Product;
}
