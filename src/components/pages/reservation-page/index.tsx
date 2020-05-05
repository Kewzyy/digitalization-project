import React from 'react'
import { ReservationPagePropsType } from './types'
import { Appbar } from 'src/components/core/app-bar'
import { css } from 'aphrodite'
import { styles } from './styles'

export const ReservationPage: React.FC<ReservationPagePropsType> = props => {
  return (
    <React.Fragment>
      <Appbar darkTheme />
      <div className={css(styles.root)}>
        <div className={css(styles.bookMenu)}>Booking menu</div>
        <div className={css(styles.tableMenu)}>Live Table view</div>
      </div>
    </React.Fragment>
  )
}
