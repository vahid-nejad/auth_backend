import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  BeforeInsert,
  PrimaryColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Field((type) => String)
  @Column({ unique: true })
  userName?: string;

  @Field((type) => String)
  @Column({ nullable: true })
  phone?: string;

  @Field()
  @Column()
  name?: string;

  @Field()
  @Column({ nullable: true })
  email?: string;

  @Field()
  @Column({ nullable: true })
  address?: string;

  @Field()
  @Column({ nullable: true })
  zip?: string;

  @Field()
  @Column()
  password?: string;

  @Field()
  @Column({ default: 'user' })
  role?: UserRole;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
export enum UserRole {
  Admin = 'admin',
  User = 'user',
}
