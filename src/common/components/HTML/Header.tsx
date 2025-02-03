import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const headerClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
      sm: '',
    },
  },
}

const headerVariants = cva('', {
  ...headerClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface HeaderProps
  extends ComponentProps<'header'>,
    VariantProps<typeof headerVariants> {}

export const Header: FC<HeaderProps> = forwardRef<HTMLHeadElement, HeaderProps>(
  ({ className, size, variant, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(headerVariants({ variant, size, className }))}
      {...props}
    />
  )
)
