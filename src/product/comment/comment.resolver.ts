import { CommentService } from './comment.service';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Comment } from 'src/entities/comment.entity';

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @Query((returns) => [Comment])
  async comments(
    @Args('productID', { type: () => Int }) productID: number,
    @Args('page', { type: () => Int }) page: number,
    @Args('limit', { type: () => Int }) limit: number,
  ) {
    return await this.commentService.findAllByProductID(productID, page, limit);
  }
}
