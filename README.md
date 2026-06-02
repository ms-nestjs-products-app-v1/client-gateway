# CLIENT GATEWAY (Manejo de errores y validación)

## Setup

Pasos para levantar el microservicio: `client-gateway`

1. Clonar el repositorio.
2. Crear y agregar las variables de entorno en `.env` basado en `.env.example`.
3. Instalar las dependencias `npm install`.
4. Ejecutar en modo development y watch `npm run start:dev`.

NATS Server:

5. Run in docker `docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats`. Open in browser (info reports): `http://localhost:8222/`

## NestJS

NestJS es un framework progresivo para desarrollar aplicaciones backend escalables usando Node.js y TypeSript.

### Client Gateway

En NestJS, un Client Gateway normalmente se refiere a un cliente que se conecta y se comunica con un Gatewasy WebSocket o con microservicios. En microservicios, NestJS usa clientes para conectarse a otros servicios.

## NATS

NATS es un sitema de mensajería y comunicación distribuida de alto rendimiento usado para conectar servicios, microservicios y aplicaciones. Su trabajo es actuar como una central de correo ultrarrápido: un servicio envía un mensaje y otro lo recibe sin que ambos necesiten conercarse directamente.

Se usa mucho con NestJS, microservicios y aquitecturas orientadas a eventos.
