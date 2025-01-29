import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const strongClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const strongVariants = cva('', {
  ...strongClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface StrongProps
  extends ComponentProps<'strong'>,
    VariantProps<typeof strongVariants> {}

export const Strong: FC<StrongProps> = forwardRef<HTMLElement, StrongProps>(
  ({ className, size, variant, ...props }, ref) => (
    <strong
      ref={ref}
      className={cn(strongVariants({ variant, size, className }))}
      {...props}
    />
  )
)
