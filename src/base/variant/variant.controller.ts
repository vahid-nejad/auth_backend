import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductVariantPrototype } from 'src/entities/productVariantPrototype.entity';
import { CreateProductVariantProtoTypeDto } from '../dto/productVariantProtoType.dto';
import { VariantService } from './variant.service';

@Controller('base/variant')
export class VariantController {
    constructor(private readonly variantService: VariantService) {}

    @Get()
    async findAll(): Promise<ProductVariantPrototype[]> {
    return await this.variantService.findAll();
    }

    @Post()
    async create(@Body() createProductVariantProtoTypeDto:CreateProductVariantProtoTypeDto): Promise<ProductVariantPrototype> {

    return await this.variantService.create(createProductVariantProtoTypeDto);
    }
}
