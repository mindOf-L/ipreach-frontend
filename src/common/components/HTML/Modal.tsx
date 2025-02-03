import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Div } from './Div'
import { Button } from './Button'
import { Nav } from './Nav'
import { Span } from './Span'
import { useDetectClickOutside } from './hooks/useDetectClickOutside'
import { useRef } from 'react'
import { XIcon } from 'lucide-react'

export const MODAL_KEY = 'modal'
export interface ModalProps {
  text?: string
  onAccept?: () => void
}

interface Modal extends ModalProps {
  active: boolean
}

export const Modal = () => {
  const queryClient = useQueryClient()
  const { data } = useQuery<Modal>({
    queryKey: [MODAL_KEY],
    queryFn: () => {
      const data = queryClient.getQueryData<Modal>([MODAL_KEY])
      return Promise.resolve(data || { active: false })
    },
  })

  const closeModal = () =>
    queryClient.setQueryData([MODAL_KEY], { active: false })

  const ref = useRef<HTMLDivElement>(null)

  useDetectClickOutside({ ref, onClickedOutside: closeModal })

  if (!data) return <></>
  const acceptModal = () => {
    data.onAccept && data.onAccept()
    closeModal()
  }

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
        <Span className='mt-5'>{data.text}</Span>
        <Nav className='mb-5 flex justify-between gap-4'>
          <Button onClick={acceptModal}>Aceptar</Button>
          <Button onClick={closeModal}>Rechazar</Button>
        </Nav>
      </Div>
    </Div>
  )
}
