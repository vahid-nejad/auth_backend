import { IsNumber } from "class-validator";

export class CreateProductVariantDto{

    @IsNumber()
    variantId:number
    @IsNumber()
    pricingProtocl:number;
    @IsNumber()
    pricingValue:number
}