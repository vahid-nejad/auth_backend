import { Product } from 'src/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne((type) => User, (user) => user.comments)
  user: User;
  date: Date;
  @ManyToOne((type) => Product, (product) => product.comments)
  product?: Product;
  @Column()
  recommandation: Recommandation;
  @Column()
  title: string;
  @Column()
  body: string;

  @Column({ default: 0 })
  likeNum: number;
  @Column({ default: 0 })
  dislikeNum: number;
}
export const enum Recommandation {
  NoIdea = 0,
  DoRecommand,
  NotRecommand,
}
