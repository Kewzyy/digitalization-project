import React from 'react'
import { css } from 'aphrodite'
import { RestaurantCardPropsType } from './types'
import { styles } from './styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { theme } from 'src/config/theme'

export const RestaurantCard: React.FC<RestaurantCardPropsType> = props => {
  const { name, isActive, image } = props
  const handleInfo = () => {
    console.log('handleInfo ::: out')
  }

  return (
    <div
      className={css(isActive ? styles.root : styles.rootDisabled)}
      style={{ backgroundImage: `url(${image})` }}>
      <div className={css(styles.header)}>
        <Typography variant='h5'>{name}</Typography>
      </div>
      <div className={css(styles.info)}>
        <Typography variant='button'>
          <Link
            onClick={handleInfo}
            style={{
              color: '#AAAAAA',
              textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;',
            }}>
            Learn more
          </Link>
        </Typography>
      </div>
    </div>
  )
}
