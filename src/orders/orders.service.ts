import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private orderRepository: typeof Order){}

  createOrder(dto, user){
    console.log(dto)
    console.log(user)
  }

  test(){
    
  }
}
