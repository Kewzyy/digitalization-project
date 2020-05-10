export interface MealType {
  _id: number
  name: string
  price: number
  type: string
}
export interface GroupedMealType {
  [keyName: string]: MealType[]
}
