import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostDto } from 'src/dto/post.dto';

import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get('users')
  async getUsers() {
    return await this.testService.getUsers();
  }

  @Get('user/:id/posts')
  async getPostsOfUser(@Param('id') userId: number) {
    return await this.testService.gePostsOfUser(userId);
  }

  @Post('post')
  async createPost(@Body() createPostDto: CreatePostDto) {
    return await this.testService.createPost(createPostDto);
  }
}
