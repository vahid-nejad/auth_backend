import {
  UpdatePhysicianExpertiseDto,
  CreatePhysicianExpertiseDto,
} from '../dto/physicianExpertise.dto';
import { PhysicianExpertise as PhysicianExpertise } from '../../entities/physicianExpertise.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PhysicianExpertiseService {
  constructor(
    @InjectRepository(PhysicianExpertise)
    private readonly physicianExpertiseRepo: Repository<PhysicianExpertise>,
  ) {}
  async update(updateDto: UpdatePhysicianExpertiseDto) {
    const physicianExpertise = await this.physicianExpertiseRepo.findOne(
      updateDto.id,
    );
    physicianExpertise.name = updateDto.name;
    return await this.physicianExpertiseRepo.save(physicianExpertise);
  }
  async findAll() {
    return await this.physicianExpertiseRepo.find();
  }

  async create(dto: CreatePhysicianExpertiseDto) {
    const sample = await this.physicianExpertiseRepo.create(dto);
    return await this.physicianExpertiseRepo.save(sample);
  }
}
