import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { retry } from 'rxjs';
import { AddOnPrototype } from 'src/entities/addOnPrototype.entity';
import { Repository } from 'typeorm';
import { CreateProductVariantProtoTypeDto } from '../dto/productVariantProtoType.dto';

@Injectable()
export class VariantService {
  constructor(
    @InjectRepository(AddOnPrototype)
    private readonly variantPrototypeRepo: Repository<AddOnPrototype>,
  ) {}

  async findAll(): Promise<AddOnPrototype[]> {
    return await this.variantPrototypeRepo.find();
  }

  async create(
    createProductVariantProtoTypeDto: CreateProductVariantProtoTypeDto,
  ): Promise<AddOnPrototype> {
    const variant = await this.variantPrototypeRepo.create(
      createProductVariantProtoTypeDto,
    );
    return await this.variantPrototypeRepo.save(variant);
  }
}
