import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileInterceptor,
  AnyFilesInterceptor,
  FilesInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';
import { Express } from 'express';
import { CreateProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return `This action returns a #${id} product`;
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    console.log('dto: ', createProductDto);
    return this.productService.create(createProductDto);
  }

  @Post('/upload-image')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'cardImage', maxCount: 1 },
        { name: 'images', maxCount: 10 },
        { name: 'descriptionImages', maxCount: 10 },
      ],
      { dest: './uploads/productImages' },
    ),
  )
  uploadFile(
    @UploadedFiles()
    files: {
      cardImage?: Express.Multer.File[];
      images?: Express.Multer.File[];
      descriptionImages?: Express.Multer.File[];
    },
  ) {
    console.log(files);
    return {
      cardImage: files.cardImage[0].filename,
      images: files.images.map((image) => image.filename),
      descriptionImages: files.descriptionImages.map((image) => {
        return { fileName: image.filename, index: image.originalname };
      }),
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates a #${id} product with ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} product`;
  }
}
