import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Good } from "./good.model";

interface CategoryCreationAtt {
  category_name:string;
}

@Table({tableName: 'categories', timestamps: false})
export class Category extends Model<Category, CategoryCreationAtt> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique:true, allowNull: false})
  category_name:string;

  @HasMany(() => Good)
  good: Good[];
}