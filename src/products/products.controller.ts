import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, firstValueFrom } from 'rxjs';

import { PRODUCT_SERVICE } from 'src/config';
import { PaginationDto } from 'src/common';

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
  findAll(@Query() paginationDto: PaginationDto) {
    // return this.productsClient.emit(); // Envia un evento (No espera respuesta)
    return this.productsClient.send(
      { cmd: 'find_all_products' },
      paginationDto,
    ); // Llama al MS y espera un respuesta
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    // return this.productsClient.send('find_one_product', { id });
    // OPCION #2
    return this.productsClient.send({ cmd: 'find_one_product' }, { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
    // OPCION #1
    // try {
    //   const product = await firstValueFrom(
    //     this.productsClient.send({ cmd: 'find_one_product' }, { id }),
    //   );
    //   return product;
    // } catch (error) {
    //   throw new RpcException(error);
    // }
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
