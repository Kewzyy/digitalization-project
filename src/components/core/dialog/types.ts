import { DialogProps as MaterialDialogProps } from '@material-ui/core/Dialog'

export interface DialogOwnProps {
    center?: boolean
}
export interface DialogState {}

export type DialogProps = DialogOwnProps & MaterialDialogProps
