import React from 'react'
import { FoodCardTypeProps } from './types'
import { styles } from './styles'
import { css } from 'aphrodite'
import { IconButton, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import { type } from 'os'
import { MealType } from 'src/types'
export const FoodCard: React.FC<FoodCardTypeProps> = ({
  title,
  price,
  id,
  added,
  available,
  addToCart,
  meal,
  onClick,
}) => {
  const [
    addedToCart,
    setAddedToCart,
  ] = React.useState(false)

  const CardIcon =
    added || addedToCart ? (
      <CheckCircleOutlineIcon color='primary' fontSize='large' />
    ) : (
      <AddIcon color='action' fontSize='large' />
    )
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.addPanel)}>
        <IconButton
          onClick={() => {
            setAddedToCart(!addedToCart)
            onClick && onClick()
          }}>
          {CardIcon}
        </IconButton>
      </div>
      <div className={css(styles.infoPanel)}>
        <div className={css(styles.infoItem)}>
          <Typography>{title}</Typography>
        </div>
        <div className={css(styles.infoItem)}>
          <Typography color='primary'>{`€ ${price.toFixed(2)}`}</Typography>
        </div>
      </div>
      <div
        className={css(styles.imgPanel)}
        style={{ backgroundImage: ` url('/img/meals/${id}.png')` }}
      />
    </div>
  )
}
