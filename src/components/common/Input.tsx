import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const inputClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const inputVariants = cva('', {
  ...inputClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type CustomComponentProps = Omit<ComponentProps<'input'>, 'size'>

interface InputProps
  extends CustomComponentProps,
    VariantProps<typeof inputVariants> {}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, variant, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(inputVariants({ variant, size, className }))}
      {...props}
    />
  )
)
