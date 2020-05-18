import React from 'react'
import { SuccesfulPagePropsType } from './types'
import { Container, Typography } from '@material-ui/core'
import { css } from 'aphrodite'
import { styles } from './styles'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined'
import { theme } from 'src/config/theme'
import { useHistory } from 'react-router-dom'
import { HOME_PAGE_ENDPOINT } from 'src/constants'
export const SuccesfulPage: React.FC<SuccesfulPagePropsType> = props => {
  const history = useHistory()

  const [
    counter,
    setCounter,
  ] = React.useState(5)

  React.useEffect(
    () => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
      if (counter === 0) {
        history.push(HOME_PAGE_ENDPOINT)
      }
    },
    [
      counter,
    ],
  )
  return (
    <Container maxWidth='lg'>
      <div className={css(styles.innerContainer)}>
        <CheckCircleOutlinedIcon
          style={{
            fontSize: 100,
            color: theme.palette.success.light,
          }}
        />

        <Typography
          variant='h3'
          style={{
            color: theme.palette.success.light,
          }}>
          Success
        </Typography>
        <Typography variant='h2'>Thank You for using Dine!</Typography>
        <Typography variant='body1'>{`You will be redirected in ${counter}...`}</Typography>
      </div>
    </Container>
  )
}
