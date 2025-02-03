import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const textAreaClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const textAreaVariants = cva('', {
  ...textAreaClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type CustomComponentProps = Omit<ComponentProps<'textarea'>, 'size'>

interface TextAreaProps
  extends CustomComponentProps,
    VariantProps<typeof textAreaVariants> {}

export const TextArea: FC<TextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(({ className, size, variant, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(textAreaVariants({ variant, size, className }))}
    {...props}
  />
))
