import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private OrdersService: OrdersService){}

  @Post()
  createOrder(@Body() dto: createOrderDto) {
    return this.OrdersService.createOrder(dto)
  }
}
