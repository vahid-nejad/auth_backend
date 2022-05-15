import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { ProductVariantPrototype } from './productVariantPrototype.entity';
@Entity()
@ObjectType()
export class ProductVariant {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: Number;

  @Field((type) => ProductVariantPrototype)
  @ManyToOne((type) => ProductVariantPrototype, (variant) => variant.id)
  varinat: ProductVariantPrototype;

  @Field((type) => Int)
  @Column()
  pricingProtocol: VariantPricingProtocol;

  @Field((type) => Int)
  @Column()
  pricingValue: number;

  @Field((type) => Product)
  @ManyToOne((type) => Product, (product) => product.variants)
  product: Product;
}
export enum VariantPricingProtocol {
  ABSOLUTE_ADD = 1,
  ABSOLUTE_SUBTRACT = 2,
  PERCENTAGE_ADD = 3,
  PERCENTAGE_SUBTRACT = 4,
}
