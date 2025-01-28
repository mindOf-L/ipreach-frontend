import { useEffect, useRef } from 'react'

export const useIntersectionObserver = ({
  callback,
  threshold = 0.5,
}: {
  callback: () => unknown
  threshold?: number
}) => {
  const ref = useRef(null)
  useEffect(() => {
    const current = ref.current
    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && callback(),
      {
        rootMargin: '0px',
        threshold,
      }
    )
    current && observer.observe(current)

    return () => {
      current && observer.unobserve(current)
    }
  }, [ref, callback, threshold])

  return { ref }
}
