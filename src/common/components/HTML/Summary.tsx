import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const summaryClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}
const summaryVariants = cva('', {
  ...summaryClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface SummaryProps
  extends ComponentProps<'summary'>,
    VariantProps<typeof summaryVariants> {}

export const Summary: FC<SummaryProps> = forwardRef<HTMLElement, SummaryProps>(
  ({ className, size, variant, ...props }, ref) => (
    <summary
      ref={ref}
      className={cn(summaryVariants({ variant, size, className }))}
      {...props}
    />
  )
)
