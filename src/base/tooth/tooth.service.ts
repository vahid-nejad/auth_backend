import { ToothNum } from './../../entities/toothNum.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateToothDto, UpdateToothDto } from '../dto/tooth.dto';

@Injectable()
export class ToothService {
  constructor(
    @InjectRepository(ToothNum)
    private readonly toothRepo: Repository<ToothNum>,
  ) {}
  async update(updateToothDto: UpdateToothDto) {
    console.log({ updateToothDto });

    const tooth = await this.toothRepo.findOne(updateToothDto.id);
    tooth.name = updateToothDto.name;
    return await this.toothRepo.save(tooth);
  }
  async findAll() {
    return await this.toothRepo.find();
  }

  async create(toothDto: CreateToothDto) {
    const tooth = await this.toothRepo.create(toothDto);
    return await this.toothRepo.save(tooth);
  }
}
