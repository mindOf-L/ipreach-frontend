import { useQueryClient } from '@tanstack/react-query'
import { MODAL_KEY, ModalProps } from '../Modal'

export const useModal = () => {
  const queryClient = useQueryClient()

  const activateModal = (modalProps: ModalProps) => {
    queryClient.setQueryData([MODAL_KEY], { active: true, ...modalProps })
    queryClient.invalidateQueries({ queryKey: [MODAL_KEY] })
  }

  return { activateModal }
}
