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
  async countByProductID(productID: number) {
    return await this.commentRepo.count({ product: { id: productID } });
  }

  async meanScoreOfProduct(productId: number) {
    const socres = await this.commentScoreRepo
      .createQueryBuilder()
      .innerJoin('comment', 'comment')
      .where('comment.productId = :productId', { productId })
      .groupBy('comment.productId')
      .select('AVG(valueByPrice)', 'valueByPrice')
      .addSelect('AVG(design)', 'design')
      .addSelect('AVG(physicalBeauty)', 'physicalBeauty')
      .addSelect('AVG(performance)', 'performance')
      .getRawOne();

    const count = await this.commentScoreRepo.count({
      where: { comment: { product: { id: productId } } },
      relations: ['comment'],
    });

    return {
      ...socres,
      count,
    };
  }

  async findAllByProductID(
    productid: number,
    take: number,
    skip: number,
  ): Promise<Comment[]> {
    return await this.commentRepo.find({
      where: { product: { id: productid } },
      relations: ['user', 'score'],
      take,
      skip,
    });
  }
  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    console.log({ createCommentDto });

    const comment = this.commentRepo.create(createCommentDto);
    comment.date = new Date();

    return await this.commentRepo.save(comment);
  }
}
