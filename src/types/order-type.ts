import { MealType } from './meal-type'
enum OrderStatus {
  IN_PROGRESS = 'INPROGRESS',
  NEW = 'NEW',
  READY = 'READY',
}
export interface OrderType {
  _id: string
  userId: string
  tableId: string
  status: OrderStatus
  createdAt: string
  meals: MealType[]
}
