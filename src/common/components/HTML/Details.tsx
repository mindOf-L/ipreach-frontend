import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const detailsClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}
const detailsVariants = cva('', {
  ...detailsClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface DetailsProps
  extends ComponentProps<'details'>,
    VariantProps<typeof detailsVariants> {}

export const Details: FC<DetailsProps> = forwardRef<
  HTMLDetailsElement,
  DetailsProps
>(({ className, size, variant, ...props }, ref) => (
  <details
    ref={ref}
    className={cn(detailsVariants({ variant, size, className }))}
    {...props}
  />
))
