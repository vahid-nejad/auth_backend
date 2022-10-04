import {
  CreatePractitionerExpertiseDto,
  UpdatePractitionerExpertiseDto,
} from './../dto/practitionerExpertise.dto';
import { PractitionerExpertiseService } from './practitioner-expertise.service';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';

@Controller('base/practitioner-expertise')
export class PractitionerExpertiseController {
  constructor(
    private readonly practitionerExpertiseService: PractitionerExpertiseService,
  ) {}

  @Get()
  async findAll() {
    return await this.practitionerExpertiseService.findAll();
  }

  @Post()
  async create(@Body() dto: CreatePractitionerExpertiseDto) {
    return await this.practitionerExpertiseService.create(dto);
  }

  @Put()
  async update(@Body() updateDto: UpdatePractitionerExpertiseDto) {
    return await this.practitionerExpertiseService.update(updateDto);
  }
}
