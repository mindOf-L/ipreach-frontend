import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const asideClasses = {
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

const asideVariants = cva('', {
  ...asideClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface AsideProps
  extends ComponentProps<'aside'>,
    VariantProps<typeof asideVariants> {}

export const Aside: FC<AsideProps> = forwardRef<HTMLElement, AsideProps>(
  ({ className, size, variant, ...props }, ref) => (
    <aside
      ref={ref}
      className={cn(asideVariants({ variant, size, className }))}
      {...props}
    />
  )
)
