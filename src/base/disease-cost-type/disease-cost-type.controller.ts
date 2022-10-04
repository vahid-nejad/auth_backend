import { UpdateDiseaseCostTypeDto } from './../dto/diseaseCostType.dto';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateDiseaseCostTypeDto } from '../dto/diseaseCostType.dto';
import { CreateToothDto, UpdateToothDto } from '../dto/tooth.dto';
import { DiseaseCostTypeService } from './disease-cost-type.service';

@Controller('base/disease-cost-type')
export class DiseaseCostTypeController {
  constructor(
    private readonly diseaseCostTypeService: DiseaseCostTypeService,
  ) {}

  @Get()
  async findAll() {
    return await this.diseaseCostTypeService.findAll();
  }

  @Post()
  async create(@Body() Dto: CreateDiseaseCostTypeDto) {
    return await this.diseaseCostTypeService.create(Dto);
  }

  @Put()
  async update(@Body() dto: UpdateDiseaseCostTypeDto) {
    return await this.diseaseCostTypeService.update(dto);
  }
}
