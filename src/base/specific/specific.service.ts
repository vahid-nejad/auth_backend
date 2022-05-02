import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Specific } from 'src/entities/specific.entity';
import { SpecificCategory } from 'src/entities/specificCategory.entity';
import { Repository } from 'typeorm';
import { CreateSpecificCategoryDto, CreateSpecificDto } from '../dto/specific.dto';

@Injectable()
export class SpecificService { 
    constructor(@InjectRepository(Specific) private readonly specificRepository: Repository<Specific>,
    @InjectRepository(SpecificCategory) private readonly categorySpec:Repository<SpecificCategory> ){}

    async findAll(): Promise<Specific[]> {
        return await this.specificRepository.find({relations:['category']});
    }

    async create(createSpecificDto: CreateSpecificDto): Promise<Specific> {
        let specific = this.specificRepository.create({ name: createSpecificDto.name, category:{id:createSpecificDto.categoryId} });

        specific= await this.specificRepository.save(specific);
        return await this.specificRepository.findOne({where:{id:specific.id},relations:['category']});
    }

    async findAllCategory(): Promise<SpecificCategory[]> {
            return await this.categorySpec.find();
    }

    async createCategory(createSpecificCategoryDto: CreateSpecificCategoryDto): Promise<SpecificCategory> {
        const specificCategory = this.categorySpec.create(createSpecificCategoryDto);
        return await this.categorySpec.save(specificCategory);
    }
}
