import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateColorDto } from '../dto/color.dto';
import { ColorService } from './color.service';

@Controller('base/color')
export class ColorController {
    constructor(private readonly colorService: ColorService) {}

    @Get()
    findAll() {
        return this.colorService.findAll();
    }


    @Post()
    async create(@Body() createColorDto: CreateColorDto) {
        return await this.colorService.create(createColorDto);
    }
}
