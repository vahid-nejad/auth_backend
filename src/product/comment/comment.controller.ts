import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateCommentDto } from '../dto/comment.dto';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @Get(':id')
  findAllByProductID(
    @Param('id') productid: number,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.commentService.findAllByProductID(productid, page, limit);
  }

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }
}
