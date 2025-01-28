import { useState } from 'react'
import { Input } from './Input'

export const NumberSelector = ({
  onNumberSelected,
}: {
  onNumberSelected: (number?: number) => void
}) => {
  const [number, setNumber] = useState('')
  return (
    <Input
      placeholder='Número...'
      type='number'
      value={number}
      onChange={(e) => {
        setNumber(e.target.value)
        const number =
          e.target.value !== '' ? Number(e.target.value) : undefined
        onNumberSelected(number)
      }}
    />
  )
}
