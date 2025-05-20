import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  HttpCode,
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

  
  @Post('login')
  @HttpCode(HttpStatus.OK) // Always return 200 for valid responses, including errors in body
  async loginUser(
    @Body() body: { email: string; password: string },
  ) {
    const { email, password } = body;

    const result = await this.userService.loginUser(email, password);

    return result;
}
}
