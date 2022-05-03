import { Body, Controller, Delete, Get,  Param, Patch, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { CreateProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService){}

    @Get()
    findAll(){
        return this.productService.findAll();
    }

    @Get('/:id')
    findOne(@Param("id") id:number){
        return `This action returns a #${id} product`;
    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    create(@Body() createProductDto:CreateProductDto,   @UploadedFile() file: Express.Multer.File,){
        return {file: file.filename};
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
