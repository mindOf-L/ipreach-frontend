import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const h3Classes = {
  variants: {
    variant: {
      default: 'font-semibold',
    },
    size: {
      default: 'text-lg md:text-xl xl:text-2xl',
    },
  },
}

const h3Variants = cva('', {
  ...h3Classes,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface H3Props
  extends ComponentProps<'h3'>,
    VariantProps<typeof h3Variants> {}

export const H3: FC<H3Props> = forwardRef<HTMLHeadingElement, H3Props>(
  ({ className, size, variant, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(h3Variants({ variant, size, className }))}
      {...props}
    />
  )
)
