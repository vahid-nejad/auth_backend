import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";
export class CreateBrandDto {
    @IsString()
    name:string;
    @IsString()
    description:string;
}


export class UpdateBrandDto extends PartialType (CreateBrandDto) {

}
