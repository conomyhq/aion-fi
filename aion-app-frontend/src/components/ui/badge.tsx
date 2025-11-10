import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "badge",
  {
    variants: {
      variant: {
        default: "badge",
        secondary: "badge",
        destructive: "badge-error",
        outline: "badge",
        success: "badge-success",
        warning: "badge-warning",
        error: "badge-error",
        accent: "badge-accent",
        gray: "badge-gray",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
