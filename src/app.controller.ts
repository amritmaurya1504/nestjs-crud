import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Root")
@Controller()
export class RootController {
  @Get()
  @ApiOperation({
    summary: 'Root Endpoint',
  })
  root() {
    return { message: 'Welcome to the Todo Application API Using NestJS', Author: 'Amrit Raj' };
  }
}
