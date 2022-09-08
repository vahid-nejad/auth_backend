import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get('meanScoreOfProduct/:id')
  async meanScoreOfProduct(@Param('id') productid: number) {
    return await this.commentService.meanScoreOfProduct(productid);
  }

  @Get('user/:id')
  async findUserComments(
    @Param('id') userId: number,
    @Query('take') take: number,
    @Query('skip') skip: number,
  ) {
    return await this.commentService.findUserComments(userId, take, skip);
  }
}
