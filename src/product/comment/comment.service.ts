import { CommentScore } from './../../entities/commentScore.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/entities/comment.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from '../dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,
    @InjectRepository(CommentScore)
    private readonly commentScoreRepo: Repository<CommentScore>,
  ) {}
  async findAllByProductID(
    productid: number,
    page: number,
    limit: number,
  ): Promise<Comment[]> {
    return await this.commentRepo.find({
      where: { product: { id: productid } },
      relations: ['user'],
      skip: page * limit,
      take: limit,
    });
  }
  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = this.commentRepo.create(createCommentDto);
    comment.date = new Date();
    return await this.commentRepo.save(comment);
  }
}
