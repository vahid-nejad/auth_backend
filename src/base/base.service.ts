import { Province } from './../entities/province.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BaseService {
  constructor(
    @InjectRepository(Province) private provinceRepo: Repository<Province>,
  ) {}
  async fetchProvinces() {
    return await this.provinceRepo.find();
  }
}
