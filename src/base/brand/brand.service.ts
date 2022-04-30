import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from 'src/entities/brand.entity';
import { Repository } from 'typeorm';
import { CreateBrandDto } from '../dto/create-base.dto';

@Injectable()
export class BrandService {

    constructor(@InjectRepository(Brand) private readonly brandRepository:Repository<Brand>, ){}

    findAll(){
        return this.brandRepository.find();
    }

   async create(createBrandDto: CreateBrandDto){
       console.log(createBrandDto)
    const brand=         this.brandRepository.create(createBrandDto);
return this.brandRepository.save(brand)
    }
}
