import { BaseService } from './base.service';
import { Controller, Get } from '@nestjs/common';

@Controller('base')
export class BaseController {
  constructor(private readonly baseService: BaseService) {}
  @Get('provinces')
  async fetchProvinces() {
    return await this.baseService.fetchProvinces();
  }
}
