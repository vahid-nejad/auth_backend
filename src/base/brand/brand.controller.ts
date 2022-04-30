import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBrandDto } from '../dto/create-base.dto';
import { BrandService } from './brand.service';

@Controller('base/brand')
export class BrandController {
    constructor (public readonly brandService:BrandService){}


    @Get()
    findAll(){
        return this.brandService.findAll()
    }

    @Post()
    async create(@Body() createBrandDto:CreateBrandDto){
        return await  this.brandService.create(createBrandDto);
    }
}
