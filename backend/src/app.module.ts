import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal:true}),
    UserModule,
    ProductsModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, ProductsService],
})
export class AppModule {}
