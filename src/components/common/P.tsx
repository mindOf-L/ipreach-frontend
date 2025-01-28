import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const pClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const pVariants = cva('', {
  ...pClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface PProps extends ComponentProps<'p'>, VariantProps<typeof pVariants> {}

export const P: FC<PProps> = forwardRef<HTMLHeadingElement, PProps>(
  ({ className, size, variant, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(pVariants({ variant, size, className }))}
      {...props}
    />
  )
)
