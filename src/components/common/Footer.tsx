import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const footerClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const footerVariants = cva('', {
  ...footerClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface FooterProps
  extends ComponentProps<'footer'>,
    VariantProps<typeof footerVariants> {}

export const Footer: FC<FooterProps> = forwardRef<HTMLElement, FooterProps>(
  ({ className, size, variant, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn(footerVariants({ variant, size, className }))}
      {...props}
    />
  )
)
