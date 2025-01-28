import { MutableRefObject, useEffect } from 'react'

export const useDetectClickOutside = ({
  ref,
  onClickedOutside,
}: {
  ref: MutableRefObject<HTMLElement | null>
  onClickedOutside: () => void
}) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickedOutside()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, onClickedOutside])
}
