import {Review} from "./review";

export interface Hardware {
  code: string,
  name: string,
  type: string,
  quantity: number,
  price: number,
  reviews: Review[]
}
