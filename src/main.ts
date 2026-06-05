import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { envs } from './config';
import { RpcCustomExceptionFilter } from './common';

async function bootstrap() {
  const logger = new Logger('Main-Gateway');
  const app = await NestFactory.create(AppModule);
  // Prefix
  app.setGlobalPrefix('api');
  // Configurar validaciones
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  // Configurar el custom filter
  app.useGlobalFilters(new RpcCustomExceptionFilter());
  console.log('Client Gateway - TEST desde el submodule!!!');
  // Port
  await app.listen(envs.port ?? 3000);
  logger.log(`Gateway running on port ${envs.port}`);
}
bootstrap();
