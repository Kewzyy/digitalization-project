import * as React from 'react'
import { RestaurantPagePropsType } from './types'
import { restaurants as ItemArr } from 'src/config/restaurant-config'
import { Appbar } from 'src/components/core/app-bar'
import { css } from 'aphrodite'
import { styles } from './styles'
import { Card, CardContent } from '@material-ui/core'
import { RestaurantCard } from 'src/components/core/restaurant-card'
import { sortRestaurants } from 'src/functions/helper-functions'

export const RestaurantPage: React.FC<RestaurantPagePropsType> = props => {
  const restaurants = sortRestaurants(ItemArr)
  return (
    <React.Fragment>
      <Appbar darkTheme={true} />

      <div className={css(styles.root)}>
        {restaurants.map(restaurant => {
          return (
            <RestaurantCard
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
