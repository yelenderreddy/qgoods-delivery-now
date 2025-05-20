import {
    BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { db } from 'src/db/db.connection.ts/db.connect';
import { beverages, dairy, fruitsAndVegetables, meat, snacks } from 'src/db/schema/productsSchema';
import { eq } from 'drizzle-orm';

@Injectable()
export class ProductsService {
  // Add new product
 private tableMap = {
    fruitsAndVegetables,
    dairy,
    beverages,
    meat,
    snacks,
  };

  async addProducts(
    sectionName: string,
    productName: string,
    quantity: number,
  ): Promise<{
    statusCode: string;
    message: string;
    data: any;
  }> {
    try {
      const table = this.tableMap[sectionName];
      if (!table) {
        throw new BadRequestException('Invalid section name');
      }

      const insertedProduct = await db
        .insert(table)
        .values({ productName, quantity })
        .returning();

      return {
        statusCode: '201',
        message: `Product added to ${sectionName} successfully`,
        data: insertedProduct[0],
      };
    } catch (error) {
      console.error('Failed to add product:', error);
      throw new InternalServerErrorException('Failed to add product');
    }
  }

  // Fetch all products
  async fetchAllFruitsAndVeggies(): Promise<{
    statusCode: string;
    message: string;
    data: any[];
  }> {
    try {
      const allProducts = await db.select().from(fruitsAndVegetables);
      return {
        statusCode: '200',
        message: 'Products fetched successfully',
        data: allProducts,
      };
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw new InternalServerErrorException('Failed to fetch products');
    }
  }

  // Update quantity by product name
  async updateQuantityWithProduct(
    productName: string,
    quantity: number
  ): Promise<{
    statusCode: string;
    message: string;
    data: any;
  }> {
    try {
      const updated = await db
        .update(fruitsAndVegetables)
        .set({ quantity })
        .where(eq(fruitsAndVegetables.productName, productName))
        .returning();

      if (updated.length === 0) {
        throw new NotFoundException('Product not found');
      }

      return {
        statusCode: '200',
        message: 'Product quantity updated successfully',
        data: updated[0],
      };
    } catch (error) {
      console.error('Failed to update quantity:', error);
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to update quantity');
    }
  }
}
