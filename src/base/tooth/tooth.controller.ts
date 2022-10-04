import { CreateToothDto, UpdateToothDto } from './../dto/tooth.dto';
import { ToothService } from './tooth.service';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';

@Controller('base/tooth')
export class ToothController {
  constructor(private readonly toothService: ToothService) {}

  @Get()
  async findAll() {
    return await this.toothService.findAll();
  }

  @Post()
  async create(@Body() toothDto: CreateToothDto) {
    console.log({ toothDto });

    return await this.toothService.create(toothDto);
  }

  @Put()
  async update(@Body() updateToothDto: UpdateToothDto) {
    return await this.toothService.update(updateToothDto);
  }
}
