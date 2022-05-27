import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { createGoodDto } from './dto/create-good.dto';
import { getAllGoodsDto } from './dto/getAllGoods-options.dto';
import { Good } from './models/good.model';

@Injectable()
export class GoodsService {

  constructor(@InjectModel(Good) private goodRepository: typeof Good){}

  async getGoods_pagination(options: getAllGoodsDto) {
    let {category, page, limit, searchQuery} = options;
    let findedGoods;
    page = page - 1;
    searchQuery = searchQuery == 'null' ? '' : searchQuery

    if (category == 0) {
      findedGoods = await this.goodRepository.findAndCountAll({
        where: {
          good_name: {[Op.iLike]:  `%${searchQuery}%`}
        },
        limit: limit,
        offset: limit * page,
      })
    } else {
      findedGoods = await this.goodRepository.findAndCountAll({
        where: {
          good_name: {[Op.iLike]:  `%${searchQuery}%`},
          category_id: category,
        },
        limit: limit,
        offset: limit * page,
      })
    }

    return {
      findedGoods: findedGoods.rows,
      countAll: findedGoods.count
    }
  }

  async createGood(goodData: createGoodDto): Promise<Good> {
    const newGood = await this.goodRepository.create(goodData);
    return newGood;
  }

 
}
