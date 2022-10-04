import { UpdatePersonDto } from './../dto/person.dto';
import { PersonService } from './person.service';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CreatePersonDto } from '../dto/person.dto';

@Controller('base/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.personService.findById(id);
  }
  @Get()
  async findByName(@Query('name') name: string) {
    return await this.personService.findByName(name);
  }

  @Post()
  async create(@Body() dto: CreatePersonDto) {
    return await this.personService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdatePersonDto) {
    return await this.personService.update(id, dto);
  }
}
