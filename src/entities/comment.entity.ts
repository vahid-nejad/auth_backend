import { type } from 'os';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/entities/product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { CommentPoint } from './commentPoint.entity';

@Entity()
@ObjectType()
export class Comment {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.comments)
  user: User;

  @Field()
  @Column({ nullable: true })
  date: Date;

  @Field((type) => Product)
  @ManyToOne((type) => Product, (product) => product.comments)
  product?: Product;

  @Field((type) => Int)
  @Column()
  recommandation: Recommandation;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  body: string;

  @Field((type) => Int)
  @Column({ default: 0 })
  likeNum: number;

  @Field((type) => Int)
  @Column({ default: 0 })
  dislikeNum: number;

  @Field((type) => [CommentPoint])
  @OneToMany((type) => CommentPoint, (point) => point.comment)
  points: CommentPoint[];
}
export const enum Recommandation {
  NoIdea = 0,
  DoRecommand,
  NotRecommand,
}
