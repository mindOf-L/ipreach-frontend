import { useQueryClient } from '@tanstack/react-query'
import { VIEW_MODAL_KEY, ViewModalProps } from '../ViewModal'

export const useViewModal = () => {
  const queryClient = useQueryClient()

  const activateModal = (modalProps: ViewModalProps) => {
    queryClient.setQueryData([VIEW_MODAL_KEY], { active: true, ...modalProps })
    queryClient.invalidateQueries({ queryKey: [VIEW_MODAL_KEY] })
  }

  return { activateModal }
}
