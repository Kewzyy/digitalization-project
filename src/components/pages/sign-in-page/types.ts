export interface DialogOwnProps {
    open: boolean
    selectedValue?: string
    onClose: (value: string) => void
}
