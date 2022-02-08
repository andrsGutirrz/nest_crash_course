import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from "@nestjs/common";

import { ProductsService } from "./../services/products.service";
import { ParseIntPipe } from "./../common/parse-int.pipe";
import { CreateProductDto } from "./../dtos/products.dtos";
@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query("limit") limit = 100,
    @Query("offset") offset = 0,
    @Query("brand") brand = ""
  ) {
    return this.productsService.findAll();
  }

  @Get(':productId')
  getOne(@Param("productId", ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() payload: any) {
    return this.productsService.update(id, payload);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    return id;
  }
} // END CLASS
