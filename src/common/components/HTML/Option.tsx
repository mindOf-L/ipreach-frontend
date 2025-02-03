import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const optionClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const optionVariants = cva('', {
  ...optionClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type CustomComponentProps = Omit<ComponentProps<'option'>, 'size'>

interface OptionProps
  extends CustomComponentProps,
    VariantProps<typeof optionVariants> {}

export const Option: FC<OptionProps> = forwardRef<
  HTMLOptionElement,
  OptionProps
>(({ className, size, variant, ...props }, ref) => (
  <option
    ref={ref}
    className={cn(optionVariants({ variant, size, className }))}
    {...props}
  />
))
