import { IsNumber, IsString } from 'class-validator';

export class CreateDeliveryMethodDto {
  @IsString()
  name: string;

  @IsNumber()
  cost: number;

  @IsNumber({ allowNaN: true })
  freeForAbove?: number;
}
