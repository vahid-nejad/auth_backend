import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Province } from './province.entity';
import { User } from './user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @Column()
  body: string;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;
}
