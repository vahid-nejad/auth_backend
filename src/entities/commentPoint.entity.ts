import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
@ObjectType()
export class CommentPoint {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  text: string;

  @ManyToOne((type) => Comment, (comment) => comment.points)
  comment: Comment;

  @Field()
  @Column()
  isPositive: boolean;
}
