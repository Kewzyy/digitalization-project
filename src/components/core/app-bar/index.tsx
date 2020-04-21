import * as React from 'react'

import { css } from 'aphrodite'
import { Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { styles } from './styles'
import { AppbarPropsType } from './types'

export const Appbar: React.FC<AppbarPropsType> = ({ darkTheme }) => {
  let history = useHistory()
  const handleLogin = () => {
    console.log('::: Logging In Securely ::: ')
    history.push('/log-in')
  }

  return (
    <header className={css(darkTheme ? styles.darkAppBar : styles.appbar)}>
      <div
        className={css(darkTheme ? styles.logoDark : styles.logo)}
        onClick={() => {
          console.log('Going home...')
        }}>
        <Typography variant='h3'>Dine.</Typography>
      </div>
      <div className={css(styles.login)}>
        <Button
          className={css(darkTheme ? styles.loginButtonDark : styles.loginButton)}
          variant='outlined'
          onClick={handleLogin}>
          Log in
        </Button>
      </div>
    </header>
  )
}
