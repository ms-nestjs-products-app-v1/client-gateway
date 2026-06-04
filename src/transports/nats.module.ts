import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { envs, NATS_SERVICE } from 'src/config';

@Module({
  imports: [
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
  exports: [
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
export class NatsModule {}
