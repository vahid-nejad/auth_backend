import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

import { City } from './city.entity';
@Entity()
@ObjectType()
export class User {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => String)
  @Column({ unique: true })
  phone: string;

  @Field()
  @Column()
  name?: string;

  @Field()
  @Column({ nullable: true })
  email?: string;

  @Field()
  @Column({ nullable: true })
  address?: string;

  @ManyToOne((type) => City, (city) => city.id, { nullable: true })
  city?: City;

  @Field()
  @Column({ nullable: true })
  zip?: string;

  @Field()
  @Column()
  password?: string;

  @Field()
  @Column({ default: 2 })
  role?: UserRole;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
export enum UserRole {
  Admin = 1,
  User = 2,
}
