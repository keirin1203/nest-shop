import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { Good } from './models/good.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Good])
  ],
  controllers: [GoodsController],
  providers: [GoodsService]
})
export class GoodsModule {}
