import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('product')
export class ProductController {

    @Get()

    getAll(@Res() response){
        return response.status(401).send( 'This action returns all products');
    }

    @Get('/:id')
    getOne(@Param()param){
        return `This action returns a #${param.id} product`;
    }

    @Post()
    @HttpCode(HttpStatus.ACCEPTED)
    create(@Body("name") body){
        return body;
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body() body){
        return `This action updates a #${id} product with ${JSON.stringify(body)}`;
    }
    
    @Delete(":id")
    remove(@Param("id") id:string){
        return `This action removes a #${id} product`;
    }
}
