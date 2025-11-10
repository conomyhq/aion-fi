import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[var(--text)] text-[var(--panel)] hover:opacity-90",
        destructive: "bg-[var(--error)] text-white hover:opacity-90",
        outline: "border border-[var(--stroke)] bg-[var(--panel)] text-[var(--text)] hover:bg-[#F2F5FA]",
        secondary: "bg-panel border border-black/50 text-black shadow-sm font-medium hover:bg-black/5",
        ghost: "bg-transparent text-[var(--text)] hover:text-[var(--accent)] hover:underline hover:underline-offset-4",
        link: "text-[var(--text)] hover:text-[var(--accent)] underline-offset-4 hover:underline",
        brandPrimary: "btn-brand-primary hover:opacity-90, text-[var(--panel)]",
        disabled: "bg-[var(--text)] text-[var(--panel)] opacity-70 cursor-not-allowed",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-11 rounded-sm px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
