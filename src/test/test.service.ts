import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from 'src/base/dto/tes.dto';
import { Post } from 'src/entities/post.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(Post) private readonly postRepo: Repository<Post>,
  ) {}
  async getUsers() {
    return await this.userRepo.find();
  }
  async gePostsOfUser(userId: number) {
    return await this.postRepo.find({
      where: {
        user: {
          id: userId,
        },
      },
    });
  }
  async createPost(createPostDto: CreatePostDto) {
    const post = await this.postRepo.create(createPostDto);
    return await this.postRepo.save(post);
  }
}
