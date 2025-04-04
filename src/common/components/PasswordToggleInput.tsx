import { MouseEvent, useState } from 'react'
import { Div } from './HTML/Div'
import { Input } from './HTML/Input'
import { Button } from './HTML/Button'
import { EyeIcon, EyeOff } from 'lucide-react'

export const PasswordToggleInput = ({ ...props }) => {
  const [isPassword, setIsPassword] = useState(true)

  const handleTogglePassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsPassword(!isPassword)
  }

  return (
    <>
      <Div className='border-primary-6 border-opacity-50 bg-primary-2 focus-within:border-secondary-2 focus-within:ring-secondary-2 dark:border-primary-4 flex w-full rounded-md border focus-within:ring-1 focus-within:outline-none'>
        <Input
          className='rounded-r-none border-0 focus:border-0 focus:ring-0 focus:outline-none'
          type={isPassword ? 'password' : 'text'}
          {...props}
        />
        <Button className='w-10' onClick={handleTogglePassword}>
          {isPassword && <EyeIcon className='h-4' />}
          {!isPassword && <EyeOff className='h-4' />}
        </Button>
      </Div>
    </>
  )
}
