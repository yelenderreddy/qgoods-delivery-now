import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('add')
  async addProduct(
    @Body() body: { sectionName:string,productName: string; quantity: number }
  ) {
    const {sectionName, productName, quantity } = body;
    return this.productsService.addProducts(sectionName,productName, quantity);
  }

  @Get('getAllFruitsAndVegies')
  async getAllProducts() {
    return this.productsService.fetchAllFruitsAndVeggies();
  }

  @Patch(':productName')
  async updateQuantity(
    @Param('productName') productName: string,
    @Body() body: { quantity: number }
  ) {
    const { quantity } = body;
    return this.productsService.updateQuantityWithProduct(productName, quantity);
  }
}
