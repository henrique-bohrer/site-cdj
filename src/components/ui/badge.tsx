import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary)]/80",
        secondary:
          "border-transparent bg-[var(--color-brand-neutral)] text-[var(--color-brand-text)] hover:bg-[var(--color-brand-neutral)]/80 dark:bg-[#4d3623] dark:text-[#EAD9B8]",
        destructive:
          "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80",
        outline: "text-foreground",
        accent: "border-transparent bg-[var(--color-brand-accent)] text-[var(--color-brand-text)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
