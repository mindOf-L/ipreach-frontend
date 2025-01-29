import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const formClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const formVariants = cva('', {
  ...formClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface FormProps
  extends ComponentProps<'form'>,
    VariantProps<typeof formVariants> {}

export const Form: FC<FormProps> = forwardRef<HTMLFormElement, FormProps>(
  ({ className, size, variant, ...props }, ref) => (
    <form
      ref={ref}
      className={cn(formVariants({ variant, size, className }))}
      {...props}
    />
  )
)
