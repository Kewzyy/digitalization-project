

export interface FoodMenuPagePropsType {
  meals?: meal[]
}

export type meal = {
    _id: number;
    name: string;
    type: string;
    price: number;
}
