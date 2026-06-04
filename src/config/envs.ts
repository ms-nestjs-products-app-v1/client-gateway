import 'dotenv/config';
import Joi from 'joi';

interface EnvVars {
  PORT: number;
  // PRODUCTS_MICROSERVICE_HOST: string;
  // PRODUCTS_MICROSERVICE_PORT: number;
  // ORDERS_MICROSERVICE_HOST: string;
  // ORDERS_MICROSERVICE_PORT: number;

  NATS_SERVERS: string[];
}

const envsSchema = Joi.object({
  PORT: Joi.number().required(),
  // PRODUCTS_MICROSERVICE_HOST: Joi.string().required(),
  // PRODUCTS_MICROSERVICE_PORT: Joi.number().required(),
  // ORDERS_MICROSERVICE_HOST: Joi.string().required(),
  // ORDERS_MICROSERVICE_PORT: Joi.number().required(),

  NATS_SERVERS: Joi.array().items(Joi.string()).required(),
}).unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// const envVars: EnvVars = value;
const envVars = value as EnvVars;

export const envs = {
  port: envVars.PORT,
  // productsMicroserviceHost: envVars.PRODUCTS_MICROSERVICE_HOST,
  // productsMicroservicePort: envVars.PRODUCTS_MICROSERVICE_PORT,
  // ordersMicroserviceHost: envVars.ORDERS_MICROSERVICE_HOST,
  // ordersMicroservicePort: envVars.ORDERS_MICROSERVICE_PORT,

  natsServers: envVars.NATS_SERVERS,
};
