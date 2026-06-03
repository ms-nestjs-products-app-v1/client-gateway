import { Module } from '@nestjs/common';

import { OrdersController } from './orders.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [OrdersController],
  imports: [
    // NATS module
    NatsModule,
  ],
})
export class OrdersModule {}
