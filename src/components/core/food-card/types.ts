import { MealType } from 'src/types'

export interface FoodCardTypeProps {
  title: string
  price: number
  id: number
  available?: boolean
  addToCart?: () => {}
  added?: boolean
  meal?: MealType
  onClick?: () => void
}
