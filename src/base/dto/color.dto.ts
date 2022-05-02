import { IsString } from "class-validator";

export class CreateColorDto {
    @IsString()
    code: string;
    @IsString()
    name: string;
}