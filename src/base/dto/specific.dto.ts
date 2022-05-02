import { IsNumber, IsString } from "class-validator";

export class CreateSpecificDto {
    @IsString()
    name:string;

    @IsNumber()
    categoryId:number;
}
export class CreateSpecificCategoryDto {
    @IsString()
    name:string;

   
}