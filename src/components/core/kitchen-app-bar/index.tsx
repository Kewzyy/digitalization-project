import * as React from 'react'
import { KitchenAppbarPropsType } from './types'
import { styles } from './styles'

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { css } from 'aphrodite'

export const KitchenAppbar: React.FC<KitchenAppbarPropsType> = ({
  activeOrders,
  acceptedOrders,
}) => {
  const [
    login,
    setLogin,
  ] = React.useState(false)

  const [
    restaurant,
    setRestaurant,
  ] = React.useState('Kitchen')

  const handleLogin = () => {
    setLogin(true)
  }
  React.useEffect(
    () => {
      if (login) {
        setRestaurant('Rossini Kitchen')
      }
    },
    [
      login,
    ],
  )
  return (
    <AppBar position='absolute'>
      <Toolbar>
        <Typography variant='h6' className={css(styles.title)}>
          {restaurant}
        </Typography>
        {activeOrders && (
          <Typography variant='body1' className={css(styles.title)}>
            Active orders: {activeOrders}
          </Typography>
        )}
        {acceptedOrders && (
          <Typography variant='body1' className={css(styles.title)}>
            Accepted orders: {acceptedOrders}
          </Typography>
        )}

        <Button color='inherit' onClick={() => handleLogin}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}
