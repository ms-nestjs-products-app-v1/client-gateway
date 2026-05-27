import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  create(@Body() body: any) {
    return `create product`;
  }

  @Get()
  findAll() {
    return 'find all products';
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
