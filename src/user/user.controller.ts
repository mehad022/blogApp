import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('/user')
export class UserController {
  constructor(
    private readonly userService: UserService, // private readonly authService: AuthService,
  ) {}

  //register user
  @Post('register')
  async create(@Body() user: User): Promise<User> {
    console.log({ user });
    return this.userService.create(user);
  }
}
