import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { retry } from 'rxjs';
import { ProductVariantPrototype } from 'src/entities/productVariantPrototype.entity';
import { Repository } from 'typeorm';
import { CreateProductVariantProtoTypeDto } from '../dto/productVariantProtoType.dto';

@Injectable()
export class VariantService {
    constructor(@InjectRepository(ProductVariantPrototype) private readonly variantPrototypeRepo:Repository<ProductVariantPrototype>) {}


    async findAll(): Promise<ProductVariantPrototype[]> {
    return await this.variantPrototypeRepo.find();
    }

    async create(createProductVariantProtoTypeDto: CreateProductVariantProtoTypeDto): Promise<ProductVariantPrototype> {
        
        const variant= await this.variantPrototypeRepo.create(createProductVariantProtoTypeDto);
        return await this.variantPrototypeRepo.save(variant);
    }
}
