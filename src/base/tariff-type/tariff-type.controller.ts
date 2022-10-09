import {
  CreateTariffTypeDto,
  UpdateTariffTypeDto,
} from './../dto/tariffType.dto';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { TariffTypeService } from './tariff-type.service';

@Controller('base/tariff-type')
export class TariffTypeController {
  constructor(private readonly tariffTypeService: TariffTypeService) {}

  @Get()
  async findAll() {
    return await this.tariffTypeService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateTariffTypeDto) {
    return await this.tariffTypeService.create(dto);
  }

  @Put()
  async update(@Body() updateDto: UpdateTariffTypeDto) {
    return await this.tariffTypeService.update(updateDto);
  }
}
