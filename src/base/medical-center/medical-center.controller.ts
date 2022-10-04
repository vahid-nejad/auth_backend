import {
  CreateMedicalCenterDto,
  UpdateMedicalCenterDto,
} from 'src/base/dto/medicalCenter.dto';
import { MedicalCenterService } from './medical-center.service';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';

@Controller('base/medical-center')
export class MedicalCenterController {
  constructor(private readonly medicalCenterService: MedicalCenterService) {}

  @Get()
  async findAll() {
    return await this.medicalCenterService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateMedicalCenterDto) {
    return await this.medicalCenterService.create(dto);
  }

  @Put()
  async update(@Body() updateDto: UpdateMedicalCenterDto) {
    return await this.medicalCenterService.update(updateDto);
  }
}
