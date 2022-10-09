import {
  CreateInsuranceCompanyDto,
  UpdateInsuranceCompanyDto,
} from 'src/base/dto/insuranceCompany.dto';
import { InsuranceCompanyService } from './insurance-company.service';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';

@Controller('base/insurance-company')
export class InsuranceCompanyController {
  constructor(
    private readonly insuranceCompanyService: InsuranceCompanyService,
  ) {}

  @Get()
  async findAll() {
    return await this.insuranceCompanyService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateInsuranceCompanyDto) {
    return await this.insuranceCompanyService.create(dto);
  }

  @Put()
  async update(@Body() updateDto: UpdateInsuranceCompanyDto) {
    return await this.insuranceCompanyService.update(updateDto);
  }
}
