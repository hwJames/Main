import { Injectable } from '@nestjs/common';
import { configuration } from '@configs';

@Injectable()
export class AppService {
  main(): string {
    return configuration().name;
  }
}
