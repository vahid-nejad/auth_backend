import {
  CreatePhysicianExpertiseDto,
  UpdatePhysicianExpertiseDto,
} from '../dto/physicianExpertise.dto';
import { PhysicianExpertiseService } from './physician-expertise.service';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';

@Controller('base/physician-expertise')
export class PractitionerExpertiseController {
  constructor(
    private readonly physicianExpertiseService: PhysicianExpertiseService,
  ) {}

  @Get()
  async findAll() {
    return await this.physicianExpertiseService.findAll();
  }

  @Post()
  async create(@Body() dto: CreatePhysicianExpertiseDto) {
    return await this.physicianExpertiseService.create(dto);
  }

  @Put()
  async update(@Body() updateDto: UpdatePhysicianExpertiseDto) {
    return await this.physicianExpertiseService.update(updateDto);
  }
}
