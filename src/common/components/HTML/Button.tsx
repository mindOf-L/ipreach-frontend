import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../../utils/tailwindUtils'

const buttonClasses = {
  variants: {
    variant: {
      default: '',
      colored:
        'dark:bg-sky-200 bg-sky-700 dark:text-slate-900 text-slate-100 hover:dark:bg-sky-300 hover:bg-sky-600',
      disabled: 'opacity-50 cursor-not-allowed bg-slate-500',
    },
    size: {
      default: 'min-h-10',
    },
  },
}

const buttonVariants = cva('w-full rounded-md transition-all duration-300', {
  ...buttonClasses,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, size, variant, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(buttonVariants({ variant, size, className }))}
    {...props}
  />
))
