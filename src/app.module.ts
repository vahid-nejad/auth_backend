import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { Product } from './product';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseModule } from './base/base.module';
import config from './ormConfig';

@Module({
  imports: [ProductModule, BaseModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService, Product],
})
export class AppModule {}
