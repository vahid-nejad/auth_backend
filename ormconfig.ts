import { DeliveryMethod } from './src/entities/delivery.entity';
import { OrderedProduct } from './src/entities/orderedProduct.entity';
import { Order } from './src/entities/order.entity';
import { CommentScore } from './src/entities/commentScore.entity';
import { City } from './src/entities/city.entity';
import { Province } from './src/entities/province.entity';
import { Answer } from './src/entities/answer.entity';
import { Question } from './src/entities/question.entity';
import { User } from './src/entities/user.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { Brand } from './src/entities/brand.entity';
import { Color } from './src/entities/color.entity';
import { Comment } from './src/entities/comment.entity';

import { Product } from './src/entities/product.entity';
import { ProductCategory } from './src/entities/productCategory.entity';
import { ProductColorVariant } from './src/entities/productColorVariant.entity';
import { ProductDescription } from './src/entities/productDescription.entity';
import { ProductSpecific } from './src/entities/productSpecific.entity';
import { AddOn } from './src/entities/addOn.entity';
import { AddOnPrototype } from './src/entities/addOnPrototype.entity';
import { Specific } from './src/entities/specific.entity';
import { SpecificCategory } from './src/entities/specificCategory.entity';
import { CommentPoint } from './src/entities/commentPoint.entity';

const config: MysqlConnectionOptions & {
  seeds: string[];
  factories: string[];
} = {
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
    AddOn,
    AddOnPrototype,
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
    Order,
    OrderedProduct,
    DeliveryMethod,
  ],

  seeds: ['./src/seeds/**/*{.ts,.js}'],
  factories: ['./src/factories/**/*{.ts,.js}'],

  synchronize: true,
};

export default config;
