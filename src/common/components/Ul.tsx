import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const ulClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const ulVariants = cva('', {
  ...ulClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface UlProps
  extends ComponentProps<'ul'>,
    VariantProps<typeof ulVariants> {}

export const Ul: FC<UlProps> = forwardRef<HTMLUListElement, UlProps>(
  ({ className, size, variant, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(ulVariants({ variant, size, className }))}
      {...props}
    />
  )
)
