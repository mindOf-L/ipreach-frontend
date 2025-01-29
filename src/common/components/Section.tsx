import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const sectionClasses = {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
}

const sectionVariants = cva('', {
  ...sectionClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface SectionProps
  extends ComponentProps<'section'>,
    VariantProps<typeof sectionVariants> {}

export const Section: FC<SectionProps> = forwardRef<HTMLElement, SectionProps>(
  ({ className, size, variant, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ variant, size, className }))}
      {...props}
    />
  )
)
