import * as React from 'react'
import { AppbarPropsType } from './types'

import { css } from 'aphrodite'
import { styles } from './styles'
import {
    Typography,
    Button
} from '@material-ui/core'


export const Appbar: React.FC<AppbarPropsType> = () => {

    const handleLogin = () => {
        console.log('::: Logging In Securely ::: ')
    }

    return (
        <header className={css(styles.appbar)}>
            <div className={css(styles.logo)}
                onClick={() => { console.log('Going home...') }}
            >
                <Typography variant="h3">
                    Dine.
                </Typography>
            </div>
            <div className={css(styles.login)}>
                <Button
                    className={css(styles.loginButton)}
                    variant="outlined"
                    onClick={handleLogin}>
                    Log in
                </Button>
            </div>
        </header>

    )
}

