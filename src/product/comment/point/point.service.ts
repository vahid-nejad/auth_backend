import { CommentPoint } from './../../../entities/commentPoint.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class PointService {
  constructor(
    @InjectRepository(CommentPoint) private pointRepo: Repository<CommentPoint>,
  ) {}

  async findAllByCommentID(commentID: number) {
    return await this.pointRepo.find({ comment: { id: commentID } });
  }
}
