import { PointService } from './point/point.service';
import { CommentService } from './comment.service';
import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Comment } from 'src/entities/comment.entity';

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(
    private commentService: CommentService,
    private pointService: PointService,
  ) {}

  @Query((returns) => Number)
  async countComments(
    @Args('productID', { type: () => Int }) productID: number,
  ) {
    return await this.commentService.countByProductID(productID);
  }

  @Query((returns) => [Comment])
  async comments(
    @Args('productID', { type: () => Int }) productID: number,
    @Args('take', { type: () => Int }) take: number,
    @Args('skip', { type: () => Int }) skip: number,
  ) {
    return await this.commentService.findAllByProductID(productID, take, skip);
  }

  @ResolveField()
  async points(@Parent() comment: Comment) {
    const { id } = comment;
    return this.pointService.findAllByCommentID(id);
  }

  @Query((returns) => [Comment])
  async userComments(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('take', { type: () => Int }) take: number,
    @Args('skip', { type: () => Int }) skip: number,
  ) {
    return await this.commentService.findUserComments(userId, take, skip);
  }
}
