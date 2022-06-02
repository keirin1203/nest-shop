import { Body, Controller, Request ,Post, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { createOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private OrdersService: OrdersService){}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  createOrder(@Body() dto: createOrderDto, @Request() request) {
    return this.OrdersService.createOrder(dto, request.user)
  }

  @Get('test')
  test(){
    return this.OrdersService.test()
  }
}
