import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.services';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalGuard)
  @Post('/login')
  async login(@Body() body) {
    console.log('in auth/login');
    console.log(body);
    return this.authService.login(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/loginjwt')
  async getProfile(@Request() req) {
    console.log('in auth/loginjwt');
    console.log(req.user);
    return req.user;
  }
}
