import * as React from 'react'
import { css } from 'aphrodite'
import { Appbar } from 'src/components/core/app-bar'
import { RestaurantCard } from 'src/components/core/restaurant-card'

import { restaurants as ItemArr } from 'src/config/restaurant-config'
import { sortRestaurants } from 'src/functions/helper-functions'

import { styles } from './styles'
import { RestaurantPagePropsType } from './types'
import { useHistory } from 'react-router-dom'
import { ORDER_PAGE_ROUTE } from 'src/constants'

export const RestaurantPage: React.FC<RestaurantPagePropsType> = props => {
  const history = useHistory()
  const restaurants = sortRestaurants(ItemArr)

  const handleClick = (name: string) => {
    localStorage.setItem('restaurantChosen', name)
    setChosen(true)
  }
  const [
    chosen,
    setChosen,
  ] = React.useState(false)
  React.useEffect(
    () => {
      if (chosen && localStorage.getItem('restaurantChosen')) {
        history.push(ORDER_PAGE_ROUTE)
      }
    },
    [
      chosen,
    ],
  )
  return (
    <React.Fragment>
      <Appbar darkTheme />

      <div className={css(styles.root)}>
        {restaurants.map(restaurant => {
          return (
            <RestaurantCard
              key={`${restaurant.name}-key`}
              name={restaurant.name}
              isActive={restaurant.active}
              image={restaurant.imageUrl}
              onClick={() => {
                handleClick(restaurant.name)
              }}
            />
          )
        })}
      </div>
    </React.Fragment>
  )
}
