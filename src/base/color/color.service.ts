import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from 'src/entities/color.entity';
import { Repository } from 'typeorm';
import { CreateColorDto } from '../dto/color.dto';

@Injectable()
export class ColorService {
    constructor(@InjectRepository(Color) private readonly colorRepository:Repository<Color> ) {}


    findAll() {
        return this.colorRepository.find();
    }

    async create(createColorDto: CreateColorDto) {
        const color=this.colorRepository.create(createColorDto);
        return await this.colorRepository.save(color);
    }
}
