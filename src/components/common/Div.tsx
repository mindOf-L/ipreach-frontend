import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const divClasses = {
  variants: {
    variant: {
      default: '',
      colored: '',
    },
    size: {
      default: '',
    },
  },
}

const divVariants = cva('', {
  ...divClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface DivProps
  extends ComponentProps<'div'>,
    VariantProps<typeof divVariants> {}

export const Div: FC<DivProps> = forwardRef<HTMLDivElement, DivProps>(
  ({ className, size, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(divVariants({ variant, size, className }))}
      {...props}
    />
  )
)
