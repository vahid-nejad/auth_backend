import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddOnPrototype } from 'src/entities/addOnPrototype.entity';
import { CreateProductVariantProtoTypeDto } from '../dto/productVariantProtoType.dto';
import { VariantService } from './variant.service';

@Controller('base/variant')
export class VariantController {
  constructor(private readonly variantService: VariantService) {}

  @Get()
  async findAll(): Promise<AddOnPrototype[]> {
    return await this.variantService.findAll();
  }

  @Post()
  async create(
    @Body() createProductVariantProtoTypeDto: CreateProductVariantProtoTypeDto,
  ): Promise<AddOnPrototype> {
    return await this.variantService.create(createProductVariantProtoTypeDto);
  }
}
