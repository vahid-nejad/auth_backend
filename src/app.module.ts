import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { Product } from './product';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormConfig';

@Module({
  imports: [ProductModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService, Product],
})
export class AppModule {}
