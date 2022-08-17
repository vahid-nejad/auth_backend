import { CommentScore } from './../entities/commentScore.entity';
import { CommentPoint } from './../entities/commentPoint.entity';
import { CommentResolver } from './comment/comment.resolver';
import { QuestionResolver } from './question/question.resolver';
import { AnswerResolver } from './answer/answer.resolver';
import { Comment } from 'src/entities/comment.entity';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseModule } from 'src/base/base.module';
import { Answer } from 'src/entities/answer.entity';
import { Brand } from 'src/entities/brand.entity';

import { City } from 'src/entities/city.entity';
import { Color } from 'src/entities/color.entity';
import { Product } from 'src/entities/product.entity';
import { ProductCategory } from 'src/entities/productCategory.entity';
import { ProductColorVariant } from 'src/entities/productColorVariant.entity';
import { ProductDescription } from 'src/entities/productDescription.entity';
import { ProductSpecific } from 'src/entities/productSpecific.entity';
import { ProductVariant } from 'src/entities/productVariant.entity';
import { ProductVariantPrototype } from 'src/entities/productVariantPrototype.entity';
import { Province } from 'src/entities/province.entity';
import { Question } from 'src/entities/question.entity';
import { Specific } from 'src/entities/specific.entity';
import { SpecificCategory } from 'src/entities/specificCategory.entity';
import { User } from 'src/entities/user.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';
import { QuestionController } from './question/question.controller';
import { QuestionService } from './question/question.service';
import { AnswerController } from './answer/answer.controller';
import { AnswerService } from './answer/answer.service';
import { PointService } from './comment/point/point.service';
import { PagerMiddleware } from 'src/middlewares/pager.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Brand,
      Color,
      ProductCategory,
      ProductColorVariant,
      ProductSpecific,
      ProductVariant,
      ProductVariantPrototype,
      Specific,
      SpecificCategory,
      ProductDescription,
      User,
      Question,
      Answer,
      Comment,
      Province,
      City,
      CommentPoint,
      CommentScore,
    ]),
    BaseModule,
  ],
  exports: [], // [TypeOrmModule],
  controllers: [
    ProductController,
    CommentController,
    QuestionController,
    AnswerController,
  ],
  providers: [
    ProductService,
    CommentService,
    QuestionService,
    AnswerService,
    AnswerResolver,
    QuestionResolver,
    CommentResolver,
    PointService,
  ],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PagerMiddleware).forRoutes(
      { path: 'product', method: RequestMethod.GET },
      {
        path: 'product/search/search',
        method: RequestMethod.GET,
      },
    );
  }
}
