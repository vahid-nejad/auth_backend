import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
@ObjectType()
export class CommentScore {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Comment)
  @JoinColumn()
  @OneToOne((type) => Comment, (comment) => comment.score)
  comment: Comment;

  @Column()
  @Field((type) => Int)
  valueByPrice: number;

  @Column()
  @Field((type) => Int)
  design: number;

  @Column()
  @Field((type) => Int)
  physicalBeauty: number;

  @Column()
  @Field((type) => Int)
  performance: number;
}
