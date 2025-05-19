import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('createUser')
  async createUser(@Body() body: {
    name: string;
    email: string;
    mobileNumber: string;
    password: string;
    defaultDeliveryAddress?: string;
  }) {
    if (!body.name || !body.email || !body.mobileNumber || !body.password) {
      throw new HttpException(
        'Missing required fields',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.userService.createUser(
      body.name,
      body.email,
      body.mobileNumber,
      body.password,
      body.defaultDeliveryAddress,
    );
  }

 
}
