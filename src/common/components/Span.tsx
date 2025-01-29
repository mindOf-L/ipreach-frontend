import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const spanClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const spanVariants = cva('', {
  ...spanClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface SpanProps
  extends ComponentProps<'span'>,
    VariantProps<typeof spanVariants> {}

export const Span: FC<SpanProps> = forwardRef<HTMLSpanElement, SpanProps>(
  ({ className, size, variant, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(spanVariants({ variant, size, className }))}
      {...props}
    />
  )
)
