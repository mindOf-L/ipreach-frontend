import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const inputClasses = {
  variants: {
    variant: {
      default:
        'rounded-md border px-2 focus:dark:outline-sky-200 focus:outline-sky-700',
    },
    size: {
      default: 'min-h-10 w-full',
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
