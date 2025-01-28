import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const navClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const navVariants = cva('', {
  ...navClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface NavProps
  extends ComponentProps<'nav'>,
    VariantProps<typeof navVariants> {}

export const Nav: FC<NavProps> = forwardRef<HTMLElement, NavProps>(
  ({ className, size, variant, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(navVariants({ variant, size, className }))}
      {...props}
    />
  )
)
