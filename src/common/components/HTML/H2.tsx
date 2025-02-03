import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const h2Classes = {
  variants: {
    variant: {
      default: '',
      colored: '',
    },
    size: {
      default: '',
    },
  },
}

const h2Variants = cva('', {
  ...h2Classes,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface H2Props
  extends ComponentProps<'h2'>,
    VariantProps<typeof h2Variants> {}

export const H2: FC<H2Props> = forwardRef<HTMLHeadingElement, H2Props>(
  ({ className, size, variant, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(h2Variants({ variant, size, className }))}
      {...props}
    />
  )
)
