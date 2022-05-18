import { type } from 'os';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/entities/product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { CommentPoint } from './commentPoint.entity';
import { CommentScore } from './commentScore.entity';

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

  // @Field((type) => Int)
  // @Column()
  // recommandation: Recommandation;

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

  @Field((type) => [CommentPoint], { nullable: true })
  @OneToMany((type) => CommentPoint, (point) => point.comment, {
    cascade: true,
  })
  points: CommentPoint[];

  @Field((type) => CommentScore)
  @OneToOne((type) => CommentScore, (score) => score.comment, { cascade: true })
  score: CommentScore;
}
// export const enum Recommandation {
//   NoIdea = 0,
//   DoRecommand,
//   NotRecommand,
// }
