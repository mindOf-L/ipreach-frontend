import { ReactNode } from 'react'
import { NavLink } from 'react-router'

export const AppNavLink = ({
  to,
  children,
}: {
  to: string
  children: ReactNode
}) => {
  return (
    <NavLink to={to} className='text-sky-500 dark:text-sky-300'>
      {children}
    </NavLink>
  )
}
