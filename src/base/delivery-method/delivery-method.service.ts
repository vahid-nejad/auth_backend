import { CreateDeliveryMethodDto } from './../dto/delivery.dto';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { DeliveryMethod } from 'src/entities/delivery.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectRepository(DeliveryMethod)
    private readonly deliveryRepo: Repository<DeliveryMethod>,
  ) {}

  async findAll(take: number, skip: number) {
    return await this.deliveryRepo.find({ take, skip });
  }

  async create(createDeliveryDto: CreateDeliveryMethodDto) {
    const delivery = await this.deliveryRepo.create(createDeliveryDto);
    return await this.deliveryRepo.save(delivery);
  }
}
