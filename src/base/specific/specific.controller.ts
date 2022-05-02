import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSpecificCategoryDto, CreateSpecificDto } from '../dto/specific.dto';
import { SpecificService } from './specific.service';

@Controller('base/specific')
export class SpecificController {
    constructor(private readonly specificService: SpecificService) {}



    @Get()
    findAll() {
        return this.specificService.findAll()

    }

    @Post()
    async create(@Body() createSpecificDto: CreateSpecificDto) {
        return await this.specificService.create(createSpecificDto);
    }


    @Get('/category')
    findAllCategory() {
        return this.specificService.findAllCategory();
    }

    @Post('/category')
    async createCategory(@Body() createSpecificCategoryDto: CreateSpecificCategoryDto) {
        return await this.specificService.createCategory(createSpecificCategoryDto);
    }

    
}
