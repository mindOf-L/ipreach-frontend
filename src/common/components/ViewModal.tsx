import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Div } from './HTML/Div'
import { Button } from './HTML/Button'
import { ReactNode, useRef } from 'react'
import { XIcon } from 'lucide-react'
import { useDetectClickOutside } from '../hooks/useDetectClickOutside'

export const VIEW_MODAL_KEY = 'view-modal'
export interface ViewModalProps {
  content?: ReactNode
}

interface ViewModal extends ViewModalProps {
  active: boolean
}

export const ViewModal = () => {
  const queryClient = useQueryClient()
  const { data } = useQuery<ViewModal>({
    queryKey: [VIEW_MODAL_KEY],
    queryFn: () => {
      const data = queryClient.getQueryData<ViewModal>([VIEW_MODAL_KEY])
      return Promise.resolve(data || { active: false })
    },
  })

  const closeModal = () =>
    queryClient.setQueryData([VIEW_MODAL_KEY], { active: false })

  const ref = useRef<HTMLDivElement>(null)

  useDetectClickOutside({ ref, onClickedOutside: closeModal })

  if (!data) return <></>
  return (
    <Div
      className={`absolute top-0 h-screen w-full ${data.active ? 'bg-primary-8 bg-opacity-50' : 'hidden'} z-20`}
    >
      <Div
        ref={ref}
        className='bg-primary-2 dark:bg-primary-6 relative w-4/5 max-w-2xl gap-10 rounded-md px-10 py-4'
      >
        <Button onClick={closeModal} className='absolute top-0 right-0'>
          <XIcon />
        </Button>
        {data.content}
      </Div>
    </Div>
  )
}
