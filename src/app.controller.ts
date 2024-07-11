import { Controller, Get } from '@nestjs/common';

@Controller()
export class RootController {
  @Get()
  root() {
    return { message: 'Welcome to the Todo Application API Using NestJS', Author: 'Amrit Raj' };
  }
}
