import React from 'react'
import { FoodCardTypeProps } from './types'
import { styles } from './styles'
import { css } from 'aphrodite'
import { IconButton, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

export const FoodCard: React.FC<FoodCardTypeProps> = ({
  title,
  price,
  id,
  available,
  addToCart,
}) => {
  const [
    addedToCart,
    setAddedToCart,
  ] = React.useState(false)

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.addPanel)}>
        <IconButton
          onClick={() => {
            setAddedToCart(!addedToCart)
          }}>
          {!addedToCart ? (
            <AddIcon color='action' fontSize='large' />
          ) : (
            <CheckCircleOutlineIcon color='primary' fontSize='large' />
          )}
        </IconButton>
      </div>
      <div className={css(styles.infoPanel)}>
        <div className={css(styles.infoItem)}>
          <Typography>{title}</Typography>
        </div>
        <div className={css(styles.infoItem)}>
          <Typography>{`€ ${price.toFixed(2)}`}</Typography>
        </div>
      </div>
      <div
        className={css(styles.imgPanel)}
        style={{ backgroundImage: ` url('/img/meals/${id}.png')` }}
      />
    </div>
  )
}
