import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const rpcError = exception.getError();

    if (
      typeof rpcError === 'object' &&
      'statusCode' in rpcError &&
      'message' in rpcError &&
      !Number.isNaN(rpcError.statusCode)
    ) {
      const statuscode = rpcError.statusCode;
      return response.status(statuscode).json(rpcError);
    }

    // Error 500 (Internal Server Error)
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR, // 500
      message: 'Internal microservice error',
    });
  }
}
