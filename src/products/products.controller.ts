import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(
    // Inyectar el client
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() body: any) {
    return `create product`;
  }

  @Get()
  findAll() {
    // return this.productsClient.emit(); // Envia un evento (No espera respuesta)
    return this.productsClient.send({ cmd: 'find_all_products' }, {}); // Llama al MS y espera un respuesta
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `find single product ${id}}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return `update product ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `delete product ${id}`;
  }
}
