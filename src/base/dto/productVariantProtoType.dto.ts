import { IsString } from "class-validator";

export class CreateProductVariantProtoTypeDto {
    @IsString()
    name:string;
 
}