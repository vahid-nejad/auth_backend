import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateBrandDto } from '../dto/create-base.dto';
import { BrandService } from './brand.service';

@Controller('base/brand')
export class BrandController {
  constructor(public readonly brandService: BrandService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req: any) {
    console.log(req.user);

    return this.brandService.findAll();
  }

  @Post()
  async create(@Body() createBrandDto: CreateBrandDto) {
    const res = await this.brandService.create(createBrandDto);
    console.log(res);
    return res;
  }
}
