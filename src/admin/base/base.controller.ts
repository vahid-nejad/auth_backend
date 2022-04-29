import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto/create-base.dto';

@Controller('admin/base')
export class BaseController {

    @Get('color')
    getColors() {
        return "this will return all colors";
    }

    @Post('brand')
    createBrand(@Body() createBrandDto: CreateBrandDto) {
        return createBrandDto

    }

    @Patch("brand/:id")
    updateBrand(@Param('id') id:number, @Body() updateBrandDto: UpdateBrandDto) {
        console.log(typeof(id))
        return updateBrandDto
        }
}
