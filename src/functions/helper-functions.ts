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

export const getOrderTotal = (order: MealType[]): number => {
  var sum = 0
  Object.values(order).map(item => {
    if (item.price) {
      sum += item.price
    }
  })
  return sum
}

export const getDateTime = (date?: string) => {
  let day = null
  let month = null
  let year = null

  let hours = null
  let minutes = null

  if (date !== null && typeof date !== 'undefined') {
    var inputDate = new Date(Date.parse(date))
    day = inputDate.getDate()
    month = inputDate.getMonth()
    year = inputDate.getFullYear()

    hours = inputDate.getHours()
    minutes = inputDate.getMinutes()
  }
  return `${day !== null && day < 10 ? `0${day}` : `${day}`}
         .${month !== null && month < 10 ? `0${month}` : `${month}`}
         .${year} At
          ${hours !== null && hours < 10 ? `0${hours}` : `${hours}`}
         :${minutes !== null && minutes < 10 ? `0${minutes}` : `${minutes}`}`
}
export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
