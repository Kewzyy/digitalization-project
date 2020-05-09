import * as React from 'react'
import { ModalTypeProps } from './types'
import { createPortal } from 'react-dom'
import { css } from 'aphrodite'
import { styles } from './styles'

export const Modal: React.FC<ModalTypeProps> = ({ onClick, children }) => {
  return createPortal(
    <div className={css(styles.root)} onClick={onClick}>
      {children}
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
}
