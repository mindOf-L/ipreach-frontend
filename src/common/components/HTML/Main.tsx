import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const mainClasses = {
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

const mainVariants = cva('', {
  ...mainClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface MainProps
  extends ComponentProps<'main'>,
    VariantProps<typeof mainVariants> {}

export const Main: FC<MainProps> = forwardRef<HTMLElement, MainProps>(
  ({ className, size, variant, ...props }, ref) => (
    <main
      ref={ref}
      className={cn(mainVariants({ variant, size, className }))}
      {...props}
    />
  )
)
