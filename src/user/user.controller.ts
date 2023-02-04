import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userSerivce: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':userName')
  async findUser(@Param('userName') userName: string) {
    return this.userSerivce.findOne(userName);
  }
}
