import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseModule } from './base/base.module';
import config from '../ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
import { ParaClinicDamageModule } from './para-clinic-damage/para-clinic-damage.module';
import { ConfigModule } from '@nestjs/config';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BaseModule,
    TypeOrmModule.forRoot(config),
    AuthModule,
    UsersModule,
    ParaClinicDamageModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
