import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GoodsModule } from './goods/goods.module';
import { Category } from './goods/models/category.model';
import { Good } from './goods/models/good.model';
import { UserModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/models/user.model';
import { Order } from './orders/models/order.model';
import { OrderGoods } from './orders/models/order-goods.model';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'museFora',
      models: [Good, Category, User, Order, OrderGoods],
      autoLoadModels: true,
    }),

    GoodsModule,

    UserModule,

    OrdersModule,

    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
