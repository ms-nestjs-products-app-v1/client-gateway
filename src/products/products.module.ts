import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { ProductsController } from './products.controller';
import { envs, NATS_SERVICE } from 'src/config';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    // Registar el servicio (product-ms)
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS, // Protocolo de transporte
        options: {
          servers: envs.natsServers, // URL del servidor NATS
        },
      },
    ]),
  ],
})
export class ProductsModule {}
