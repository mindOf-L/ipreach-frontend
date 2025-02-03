import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const labelClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const labelVariants = cva('', {
  ...labelClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface LabelProps
  extends ComponentProps<'label'>,
    VariantProps<typeof labelVariants> {}

export const Label: FC<LabelProps> = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size, variant, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(labelVariants({ variant, size, className }))}
      {...props}
    />
  )
)
