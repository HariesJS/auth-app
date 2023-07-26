export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    text: string
    withButtons?: boolean
    firstButtonTitle?: string
    secondButtonTitle?: string
}