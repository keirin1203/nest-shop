import {Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Order } from "src/orders/models/order.model";

interface UserCreationAtt {
  user_name:string;
  email:string;
  password:string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAtt> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  user_name: string;

  @Column({type: DataType.INTEGER, unique: true , allowNull: false})
  email: number;

  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @HasMany(() => Order)
  orders: Order[];
}