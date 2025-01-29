import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const selectClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const selectVariants = cva('', {
  ...selectClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type CustomComponentProps = Omit<ComponentProps<'select'>, 'size'>

interface SelectProps
  extends CustomComponentProps,
    VariantProps<typeof selectVariants> {}

export const Select: FC<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ className, size, variant, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(selectVariants({ variant, size, className }))}
    {...props}
  />
))
