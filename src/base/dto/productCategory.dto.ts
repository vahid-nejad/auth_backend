import { IsNumber, IsString } from "class-validator";

export class CreateProductCategoryDto {
    @IsString()
    name:string;

    @IsNumber()
    parentId:number;
}