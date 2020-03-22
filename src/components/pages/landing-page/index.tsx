import * as React from 'react'
import { LandingPageProps } from './types'
import { css } from 'aphrodite'
import { styles } from './styles'
import { foodData } from 'src/mock'
import { Typography } from '@material-ui/core'
import { Appbar } from 'src/components/core/app-bar'
import { Button } from '@material-ui/core'
export const LandingPage: React.FC<LandingPageProps> = () => {

    foodData.map((category: any) => {
        console.log("category", category)
        category.data.forEach((item: any) => {
            console.log("Item ", item)
        })
    })


    const rootStyles = css(
        [
            styles.root,
            styles.bgMain,
            styles.bgOne
        ]
    )
    return (
        <div className={rootStyles}>
            <Appbar />
            <div className={css(styles.content)}>
                <Typography variant="h2" color="textSecondary">
                    Book. Dine. Enjoy.
              </Typography>
                <Button variant="contained"
                    className={css(styles.signUpButton)}>
                    Sign up
              </Button>
            </div>
        </div>
    )
}
