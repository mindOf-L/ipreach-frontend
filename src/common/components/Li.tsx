import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const liClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}
const liVariants = cva('', {
  ...liClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface LiProps
  extends ComponentProps<'li'>,
    VariantProps<typeof liVariants> {}

export const Li: FC<LiProps> = forwardRef<HTMLLIElement, LiProps>(
  ({ className, size, variant, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(liVariants({ variant, size, className }))}
      {...props}
    />
  )
)
