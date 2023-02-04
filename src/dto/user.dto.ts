import { IsOptional, IsString } from 'class-validator';
import { UserRole } from 'src/entities/user.entity';

export class CreateUserDto {
  @IsString()
  userName: string;
  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  role: UserRole;
}
