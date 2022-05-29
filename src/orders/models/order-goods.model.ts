import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Good } from "src/goods/models/good.model";
import { Order } from "./order.model";

@Table({tableName: 'order_goods', createdAt: false, updatedAt: false})
export class OrderGoods extends Model<OrderGoods> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Order)
  @Column({type: DataType.INTEGER})
  order_id: string;

  @ForeignKey(() => Good)
  @Column({type: DataType.INTEGER})
  good_id: number;

}