import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const aClasses = {
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

const aVariants = cva('', {
  ...aClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface AProps extends ComponentProps<'a'>, VariantProps<typeof aVariants> {}

export const A: FC<AProps> = forwardRef<HTMLAnchorElement, AProps>(
  ({ className, size, variant, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(aVariants({ variant, size, className }))}
      {...props}
    />
  )
)
