import {
  UpdateTariffTypeDto,
  CreateTariffTypeDto,
} from './../dto/tariffType.dto';
import { TariffType } from './../../entities/tariffType.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TariffTypeService {
  constructor(
    @InjectRepository(TariffType)
    private readonly tariffTypeRepo: Repository<TariffType>,
  ) {}
  async update(updateDto: UpdateTariffTypeDto) {
    const doc = await this.tariffTypeRepo.findOne(updateDto.id);
    doc.name = updateDto.name;
    return await this.tariffTypeRepo.save(doc);
  }
  async findAll() {
    return await this.tariffTypeRepo.find();
  }

  async create(createDto: CreateTariffTypeDto) {
    const doc = await this.tariffTypeRepo.create(createDto);
    return await this.tariffTypeRepo.save(doc);
  }
}
