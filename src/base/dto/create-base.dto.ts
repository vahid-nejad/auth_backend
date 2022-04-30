import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";
export class CreateBrandDto {
    @IsString()
    name:string;
 
}


export class UpdateBrandDto extends PartialType (CreateBrandDto) {}
