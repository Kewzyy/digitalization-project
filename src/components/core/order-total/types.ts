import { MealType } from 'src/types'
export interface OrderTotalProps {
  order: MealType[]
  payAction: () => void
}
