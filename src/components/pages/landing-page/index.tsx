import * as React from 'react'

import { Typography, Button } from '@material-ui/core'
import { Appbar } from 'src/components/core/app-bar'
import { foodData } from 'src/mock'

import { css } from 'aphrodite'
import { LandingPageProps } from './types'
import { styles, rootStyles } from './styles'

export const LandingPage: React.FC<LandingPageProps> = () => {
  foodData.map((category: any) => {
    console.log('category', category)
    category.data.forEach((item: any) => {
      console.log('Item ', item)
    })
  })

  return (
    <div className={rootStyles}>
      <Appbar />
      <div className={css(styles.content)}>
        <Typography variant='h2' color='textSecondary'>
          Book. Dine. Enjoy.
        </Typography>
        <Button variant='contained' className={css(styles.signUpButton)}>
          Sign up
        </Button>
      </div>
    </div>
  )
}
