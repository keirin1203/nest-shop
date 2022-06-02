import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { OrderGoods } from './models/order-goods.model';
import { Order } from './models/order.model';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    SequelizeModule.forFeature([Order, OrderGoods]),
    AuthModule,
    JwtModule
  ]
})
export class OrdersModule {}
