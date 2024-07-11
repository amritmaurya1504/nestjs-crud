import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; author: string } {
    return { message: 'Hello! from Todo rest API!', author: 'Amrit Raj' };
  }
}
