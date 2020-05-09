import * as React from 'react'
import {
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'

import { LogInForm } from 'src/components/forms/log-in-form'

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => (
  <Slide direction='down' ref={ref} {...props} />
))

export const SignInPage = () => {
  const [
    open,
    setOpen,
  ] = React.useState(true)
  const handleClose = () => {
    setOpen(false)
  }
  console.log('Rendering modal...')
  return (
    <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} keepMounted>
      <DialogTitle>Log in</DialogTitle>
      <DialogContent>
        <LogInForm />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
