import { Module } from '@nestjs/common';
import { BaseController } from './base.controller';

@Module({
  controllers: [ BaseController]
  
})
export class BaseModule {}
