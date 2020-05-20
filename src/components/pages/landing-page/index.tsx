import * as React from 'react'

import { Typography, Button } from '@material-ui/core'
import { Appbar } from 'src/components/core/app-bar'
import { css } from 'aphrodite'

import { LandingPageProps } from './types'
import { styles, rootStyles } from './styles'
import { getUsers } from 'src/api/requests'
import { useHistory } from 'react-router-dom'
import { RESTAURANT_PAGE_ROUTE } from 'src/constants'

export const LandingPage: React.FC<LandingPageProps> = () => {
  const history = useHistory()
  const doneLoading = () => {
    console.log('Done loading')
    return true
  }
  const handleDemo = () => {
    history.push(RESTAURANT_PAGE_ROUTE)
  }

  React.useEffect(() => {
    localStorage.clear()
  }, [])
  return (
    <div className={rootStyles}>
      <Appbar />
      <div className={css(styles.content)}>
        <Typography variant='h2' color='textSecondary'>
          Book. Dine. Enjoy.
        </Typography>
        <Button variant='contained' className={css(styles.signUpButton)} onClick={handleDemo}>
          Demo
        </Button>
      </div>
    </div>
  )
}
