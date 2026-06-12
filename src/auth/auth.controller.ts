import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { NATS_SERVICE } from 'src/config';
import { LoginUserDto, RegisterUserDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  /**
   * foo.* - matches foo.bar, foo.baz, and so on, but not foo.bar.baz
   * foo.*.bar - matches foo.baz.bar, foo.qux.bar, and so on, but not foo.bar or foo.bar.baz
   * foo.> - matches foo.bar, foo.bar.baz, and so on
   */

  @Post('register')
  registerUser(@Body() registerUserDto: RegisterUserDto) {
    return this.client.send('auth.register.user', registerUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.client.send('auth.login.user', loginUserDto);
  }

  @Get('verify')
  verifyTokenUser() {
    return this.client.send('auth.verify.user', {});
  }
}
