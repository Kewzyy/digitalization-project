import * as React from 'react'
import { Appbar } from 'src/components/core/app-bar'
import { FoodCard } from 'src/components/core/food-card'

import { css } from 'aphrodite'
import { getMeals } from 'src/api/requests'
import { groupBy } from 'src/functions/helper-functions'

import { FoodMenuPagePropsType } from './types'
import { GroupedMealType } from 'src/types'
import { styles } from './styles'

export const FoodMenuPage: React.FC<FoodMenuPagePropsType> = props => {
  const [
    foodMenu,
    setfoodMenu,
  ] = React.useState<GroupedMealType>({})

  React.useEffect(() => {
    getMeals()
      .then((res: any) => {
        const mealsGrouped = groupBy(res.data, 'type')
        setfoodMenu(mealsGrouped)
      })
      .catch(err => {
        console.log('ERR_2', err)
      })
  }, [])

  return (
    <React.Fragment>
      <Appbar darkTheme />
      <div className={css(styles.root)}>
        <div className={css(styles.container)}>
          {Object.keys(foodMenu).map(type => {
            return foodMenu[type].map(meal => {
              return (
                <FoodCard
                  key={`${meal._id}-key`}
                  title={meal.name}
                  price={meal.price}
                  id={meal._id}
                  available={true}
                />
              )
            })
          })}
        </div>
      </div>
    </React.Fragment>
  )
}
