import React from 'react'
import { FoodCategoryPropsType } from './types'
import { styles } from './styles'
import { css } from 'aphrodite'
import { Typography } from '@material-ui/core'

export const FoodCategory: React.FC<FoodCategoryPropsType> = ({ category }) => {
  return (
    <div className={css(styles.root)}>
      <Typography variant='h4'>{category}</Typography>
    </div>
  )
}
