import {
  UpdateInsuranceCompanyDto,
  CreateInsuranceCompanyDto,
} from './../dto/insuranceCompany.dto';
import { InsuranceCompany } from './../../entities/insuranceCompany.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InsuranceCompanyService {
  constructor(
    @InjectRepository(InsuranceCompany)
    private readonly insuranceCompanyRepo: Repository<InsuranceCompany>,
  ) {}
  async update(updateDto: UpdateInsuranceCompanyDto) {
    const doc = await this.insuranceCompanyRepo.findOne(updateDto.id);
    doc.name = updateDto.name;
    return await this.insuranceCompanyRepo.save(doc);
  }
  async findAll() {
    return await this.insuranceCompanyRepo.find();
  }

  async create(createDto: CreateInsuranceCompanyDto) {
    const doc = await this.insuranceCompanyRepo.create(createDto);
    return await this.insuranceCompanyRepo.save(doc);
  }
}
