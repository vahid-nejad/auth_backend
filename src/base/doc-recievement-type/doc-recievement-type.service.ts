import {
  UpdateDocRecievementTypeDto,
  CreateDocRecievementTypeDto,
} from './../dto/docRecievementType.dto';
import { DocRecievementType } from './../../entities/docRecievementType.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DocRecievementTypeService {
  constructor(
    @InjectRepository(DocRecievementType)
    private readonly docRecievementDto: Repository<DocRecievementType>,
  ) {}
  async update(updateDto: UpdateDocRecievementTypeDto) {
    const doc = await this.docRecievementDto.findOne(updateDto.id);
    doc.name = updateDto.name;
    return await this.docRecievementDto.save(doc);
  }
  async findAll() {
    return await this.docRecievementDto.find();
  }

  async create(createDto: CreateDocRecievementTypeDto) {
    const doc = await this.docRecievementDto.create(createDto);
    return await this.docRecievementDto.save(doc);
  }
}
