import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { OrderGoods } from "src/orders/models/order-goods.model";
import { Order } from "src/orders/models/order.model";
import { Category } from "./category.model";

interface GoodCreationAtt {
  good_name:string;
  price:number;
  photo:string;
  category_id:number;
}

@Table({tableName: 'goods'})
export class Good extends Model<Good, GoodCreationAtt> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  good_name: string;

  @Column({type: DataType.INTEGER, allowNull: false})
  price: number;

  @Column({type: DataType.STRING})
  photo: string;

  @ForeignKey(() => Category)
  @Column({type: DataType.INTEGER})
  category_id: number;

  @BelongsTo(() => Category)
  category: Category;

  @BelongsToMany(() => Order, () => OrderGoods)
  orders: Order[];
}