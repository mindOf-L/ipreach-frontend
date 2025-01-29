import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const imgClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
      full: '',
    },
  },
}

const imgVariants = cva('', {
  ...imgClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface ImgProps
  extends ComponentProps<'img'>,
    VariantProps<typeof imgVariants> {}

export const Img: FC<ImgProps> = forwardRef<HTMLImageElement, ImgProps>(
  ({ className, size, variant, ...props }, ref) => (
    <img
      ref={ref}
      className={cn(imgVariants({ variant, size, className }))}
      {...props}
    />
  ),
)
