import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductService {
    constructor (@InjectRepository(Product) private readonly productRepo:Repository<Product>) {}


    async findAll():Promise<Product[]>{
        return await this.productRepo.find();
    }
}
