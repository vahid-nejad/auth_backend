import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { ProductController } from './product.controller';

@Module({
  imports: [],//[TypeOrmModule.forFeature([Product])],
  exports:[],// [TypeOrmModule],
  controllers: [ProductController],
})
export class ProductModule {}
