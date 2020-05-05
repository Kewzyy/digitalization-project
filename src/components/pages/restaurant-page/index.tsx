import * as React from 'react'
import { css } from 'aphrodite'
import { Appbar } from 'src/components/core/app-bar'
import { RestaurantCard } from 'src/components/core/restaurant-card'

import { restaurants as ItemArr } from 'src/config/restaurant-config'
import { sortRestaurants } from 'src/functions/helper-functions'

import { styles } from './styles'
import { RestaurantPagePropsType } from './types'

export const RestaurantPage: React.FC<RestaurantPagePropsType> = props => {
  const restaurants = sortRestaurants(ItemArr)
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
            />
          )
        })}
      </div>
    </React.Fragment>
  )
}
