
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { ProductVariantPrototype } from './productVariantPrototype.entity';
@Entity()
export class ProductVariant {
  @PrimaryGeneratedColumn()
  id:Number
    @ManyToOne(type=>ProductVariantPrototype, variant=>variant.id)
    varinat: ProductVariantPrototype;
    @Column()
    pricingProtocol: VariantPricingProtocol;
    @Column()
    pricingValue: number;
@ManyToOne(type => Product, product => product.variants)
    product: Product;
  }
  export enum VariantPricingProtocol {
    ABSOLUTE_ADD = 1,
    ABSOLUTE_SUBTRACT = 2,
    PERCENTAGE_ADD = 3,
    PERCENTAGE_SUBTRACT = 4,
  }