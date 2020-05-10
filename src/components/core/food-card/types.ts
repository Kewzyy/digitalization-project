export interface FoodCardTypeProps {
  title: string
  price: number
  id: number
  available?: boolean
  addToCart?: () => {}
}
