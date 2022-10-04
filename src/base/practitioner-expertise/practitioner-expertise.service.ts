import {
  UpdatePractitionerExpertiseDto,
  CreatePractitionerExpertiseDto,
} from './../dto/practitionerExpertise.dto';
import { PractitionerExpertise } from './../../entities/practitionerExpertise.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PractitionerExpertiseService {
  constructor(
    @InjectRepository(PractitionerExpertise)
    private readonly practitionerExpertiseRepo: Repository<PractitionerExpertise>,
  ) {}
  async update(updateDto: UpdatePractitionerExpertiseDto) {
    const practitionerExpertise = await this.practitionerExpertiseRepo.findOne(
      updateDto.id,
    );
    practitionerExpertise.name = updateDto.name;
    return await this.practitionerExpertiseRepo.save(practitionerExpertise);
  }
  async findAll() {
    return await this.practitionerExpertiseRepo.find();
  }

  async create(dto: CreatePractitionerExpertiseDto) {
    const sample = await this.practitionerExpertiseRepo.create(dto);
    return await this.practitionerExpertiseRepo.save(sample);
  }
}
