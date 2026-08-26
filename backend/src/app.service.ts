import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  checkHealth() {
    return {
      status: "success",
      message: "Api health testig",
      health: "Active"
    }
  }
}
