import { Good } from "src/goods/models/good.model";

export class createOrderDto{
  delivery_type: string;
  delivery_summa: number;
  full_summa: number;
  delivery: string;

  phone: string;
  message: string;
  
  goods: Good[];
}