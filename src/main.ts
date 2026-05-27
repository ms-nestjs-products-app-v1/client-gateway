import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { envs } from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main-Gateway');
  const app = await NestFactory.create(AppModule);
  // Prefix
  app.setGlobalPrefix('api');
  // Port
  await app.listen(envs.port ?? 3000);
  logger.log(`Gateway running on port ${envs.port}`);
}
bootstrap();
