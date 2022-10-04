import {
  CreateDocRecievementTypeDto,
  UpdateDocRecievementTypeDto,
} from './../dto/docRecievementType.dto';
import { DocRecievementTypeService } from './doc-recievement-type.service';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';

@Controller('base/doc-recievement-type')
export class DocRecievementTypeController {
  constructor(private readonly docService: DocRecievementTypeService) {}

  @Get()
  async findAll() {
    return await this.docService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateDocRecievementTypeDto) {
    return await this.docService.create(dto);
  }

  @Put()
  async update(@Body() updateDto: UpdateDocRecievementTypeDto) {
    return await this.docService.update(updateDto);
  }
}
