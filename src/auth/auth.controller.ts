import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';

import { NATS_SERVICE } from 'src/config';
import { LoginUserDto, RegisterUserDto } from './dto';
import { catchError } from 'rxjs';

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
    // Crear user and reactive error handler (RxJS)
    return this.client.send('auth.register.user', registerUserDto).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.client.send('auth.login.user', loginUserDto).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }

  @Get('verify')
  verifyTokenUser() {
    return this.client.send('auth.verify.user', {});
  }
}
