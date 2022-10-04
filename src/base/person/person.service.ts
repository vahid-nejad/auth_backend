import { Person } from './../../entities/person.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonDto, UpdatePersonDto } from '../dto/person.dto';
import { Like, Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private readonly personRepo: Repository<Person>,
  ) {}

  async findByName(name: string) {
    console.log({ name });

    const persons = await this.personRepo.find({
      where: {
        name: Like(`%${name}%`),
      },
    });

    return persons;
  }
  async update(id: string, dto: UpdatePersonDto) {
    return this.personRepo.update(id, dto);
  }
  async create(dto: CreatePersonDto) {
    const person = await this.personRepo.create(dto);
    return await this.personRepo.save(dto);
  }
  async findById(id: string) {
    return await this.personRepo.findOne(id);
  }
}
