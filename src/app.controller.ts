import { UseGuards } from '@nestjs/common';
import { Controller, Get, Post, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('auth/login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return req.user;
  }
}
