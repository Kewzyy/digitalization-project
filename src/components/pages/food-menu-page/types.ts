

export interface FoodMenuPagePropsType {
  meals?: meal[]
}

export type meal = {
    id: number;
    name: string;
    type: string;
    price: number;
}
