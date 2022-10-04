import {
  UpdateDiseaseCostTypeDto,
  CreateDiseaseCostTypeDto,
} from './../dto/diseaseCostType.dto';
import { DiseaseCostType } from './../../entities/diseaseCostType.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DiseaseCostTypeService {
  constructor(
    @InjectRepository(DiseaseCostType)
    private readonly diseaseCostTypeRepo: Repository<DiseaseCostType>,
  ) {}
  async update(dto: UpdateDiseaseCostTypeDto) {
    const diseaseCostType = await this.diseaseCostTypeRepo.findOne(dto.id);
    diseaseCostType.name = dto.name;
    return await this.diseaseCostTypeRepo.save(diseaseCostType);
  }
  async findAll() {
    return await this.diseaseCostTypeRepo.find();
  }

  async create(dto: CreateDiseaseCostTypeDto) {
    const diseaseCostType = await this.diseaseCostTypeRepo.create(dto);
    return await this.diseaseCostTypeRepo.save(diseaseCostType);
  }
}
