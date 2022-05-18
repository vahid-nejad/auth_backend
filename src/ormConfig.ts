import { CommentScore } from './entities/commentScore.entity';
import { City } from './entities/city.entity';
import { Province } from './entities/province.entity';
import { Answer } from './entities/answer.entity';
import { Question } from './entities/question.entity';
import { User } from './entities/user.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { Brand } from './entities/brand.entity';
import { Color } from './entities/color.entity';
import { Comment } from 'src/entities/comment.entity';

import { Product } from './entities/product.entity';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductColorVariant } from './entities/productColorVariant.entity';
import { ProductDescription } from './entities/productDescription.entity';
import { ProductSpecific } from './entities/productSpecific.entity';
import { ProductVariant } from './entities/productVariant.entity';
import { ProductVariantPrototype } from './entities/productVariantPrototype.entity';
import { Specific } from './entities/specific.entity';
import { SpecificCategory } from './entities/specificCategory.entity';
import { CommentPoint } from './entities/commentPoint.entity';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'sakura',
  host: 'localhost',
  username: 'root',
  password: 'root',
  port: 3306,
  entities: [
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
  ],

  synchronize: true,
};

export default config;
