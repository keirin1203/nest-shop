import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Good } from "src/goods/models/good.model";
import { User } from "src/users/models/user.model";
import { OrderGoods } from "./order-goods.model";

interface OrderCreationAtt {
  delivery_type: string,
  delivery_summa: number,
  full_summa: number,
  delivery: string,

  goods: Good[],
  user_id: number,
}

@Table({tableName: 'orders'})
export class Order extends Model<Order, OrderCreationAtt> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING})
  delivery_type: string;

  @Column({type: DataType.INTEGER})
  delivery_summa: number;

  @Column({type: DataType.INTEGER, allowNull: false})
  full_summa: number;

  @Column({type: DataType.INTEGER})
  delivery: string;


  @Column({type: DataType.INTEGER, allowNull: false})
  address: string;

  @Column({type: DataType.INTEGER, allowNull: false})
  phone: string;
  

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER, allowNull: false})
  user_id: number;


  @BelongsTo(() => User)
  user: User;

  @BelongsToMany(() => Good, () => OrderGoods)
  goods: Good[];
}