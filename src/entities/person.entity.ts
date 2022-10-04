import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { City } from './city.entity';

@Entity()
export class Person {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne((type) => City, (city) => city.id)
  city: City;

  @Column()
  address: string;

  @Column()
  tell: string;
}
