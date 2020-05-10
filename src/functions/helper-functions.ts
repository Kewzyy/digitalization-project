import { RestaurantType, MealType } from 'src/types'

export const composeAppRoute = (routes: string[]): string => {
  const route = routes.join('|')
  return `${route}`
}

export const sortRestaurants = (restaurants: RestaurantType[]): RestaurantType[] => {
  restaurants.sort(restaurant => (restaurant.active ? -1 : 1))
  return restaurants
}

export const groupBy = (array: any[], key: string | number) => {
  return array.reduce((result, currentValue) => {
    ;(result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue)
    return result
  }, {})
}
