import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Users!!';
  }

  getWorld(): string {
    return 'Whole New World~~~';
  }
}
