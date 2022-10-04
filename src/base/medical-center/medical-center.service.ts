import {
  UpdateMedicalCenterDto,
  CreateMedicalCenterDto,
} from './../dto/medicalCenter.dto';
import { MedicalCenter } from './../../entities/medicalCenter.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MedicalCenterService {
  constructor(
    @InjectRepository(MedicalCenter)
    private readonly medicalCenterRepo: Repository<MedicalCenter>,
  ) {}
  async update(updateDto: UpdateMedicalCenterDto) {
    const doc = await this.medicalCenterRepo.findOne(updateDto.id);
    doc.name = updateDto.name;
    return await this.medicalCenterRepo.save(doc);
  }
  async findAll() {
    return await this.medicalCenterRepo.find();
  }

  async create(createDto: CreateMedicalCenterDto) {
    const doc = await this.medicalCenterRepo.create(createDto);
    return await this.medicalCenterRepo.save(doc);
  }
}
