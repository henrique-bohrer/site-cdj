import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-dark)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(193,98,43,0.5)] active:translate-y-0",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
        outline:
          "border-2 border-[var(--color-brand-primary)] bg-transparent text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
        secondary:
          "bg-[var(--color-brand-neutral)] text-[var(--color-brand-text)] hover:bg-[var(--color-brand-neutral)]/80 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:bg-[#4d3623] dark:text-[#EAD9B8] dark:hover:bg-[#4d3623]/80",
        ghost: "hover:bg-black/5 dark:hover:bg-white/10 hover:text-[var(--color-brand-primary)] active:scale-95",
        link: "text-[var(--color-brand-primary)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-xl px-10 text-base",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
