import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { createGoodDto } from './dto/create-good.dto';
import { getAllGoodsDto } from './dto/getAllGoods-options.dto';
import { GoodsService } from './goods.service';

@Controller('goods')
export class GoodsController {
  constructor(private GoodsService: GoodsService){}

  @Get()
  getGoods_pagination(@Query() optionsDto: getAllGoodsDto){
    return this.GoodsService.getGoods_pagination(optionsDto)
  }

  @Post()
  createGood(@Body() dto: createGoodDto){
    return this.GoodsService.createGood(dto);
  }
}
