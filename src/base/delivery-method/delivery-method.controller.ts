import { CreateDeliveryMethodDto } from './../dto/delivery.dto';
import { DeliveryMethodService } from './delivery-method.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('delivery-method')
export class DeliveryMethodController {
  constructor(private readonly deliveryMethodService: DeliveryMethodService) {}

  @Get()
  async findAll(@Query('take') take: number, @Query('skip') skip: number) {
    return await this.deliveryMethodService.findAll(take, skip);
  }

  @Post()
  async create(@Body() createDeliveryDto: CreateDeliveryMethodDto) {
    return await this.deliveryMethodService.create(createDeliveryDto);
  }
}
