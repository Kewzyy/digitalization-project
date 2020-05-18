import * as React from 'react'
import { Appbar } from 'src/components/core/app-bar'
import { css } from 'aphrodite'
import { styles } from './styles'
import { DefaultLayoutPropsType } from './types'

export const DefaultLayout: React.FC<DefaultLayoutPropsType> = ({ children, darkMode = false }) => {
  return (
    <React.Fragment>
      <Appbar darkTheme={darkMode} />
      <div className={css(styles.root)}>{children}</div>
    </React.Fragment>
  )
}
