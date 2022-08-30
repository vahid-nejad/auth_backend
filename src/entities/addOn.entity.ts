import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { AddOnPrototype } from './addOnPrototype.entity';
@Entity()
@ObjectType()
export class AddOn {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: Number;

  @Field((type) => AddOnPrototype)
  @ManyToOne((type) => AddOnPrototype, (variant) => variant.id)
  addOn: AddOnPrototype;

  @Field((type) => Int)
  @Column()
  pricingProtocol: VariantPricingProtocol;

  @Field((type) => Int)
  @Column()
  pricingValue: number;

  @Field((type) => Product)
  @ManyToOne((type) => Product, (product) => product.addOns)
  product: Product;
}
export enum VariantPricingProtocol {
  ABSOLUTE_ADD = 1,
  ABSOLUTE_SUBTRACT = 2,
  PERCENTAGE_ADD = 3,
  PERCENTAGE_SUBTRACT = 4,
}
