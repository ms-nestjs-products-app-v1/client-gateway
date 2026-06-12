import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  /**
   * foo.* - matches foo.bar, foo.baz, and so on, but not foo.bar.baz
   * foo.*.bar - matches foo.baz.bar, foo.qux.bar, and so on, but not foo.bar or foo.bar.baz
   * foo.> - matches foo.bar, foo.bar.baz, and so on
   */

  @Post('register')
  registerUser() {
    return this.client.send('auth.register.user', {});
  }

  @Post('login')
  loginUser() {
    return this.client.send('auth.login.user', {});
  }

  @Get('verify')
  verifyTokenUser() {
    return this.client.send('auth.verify.user', {});
  }
}
