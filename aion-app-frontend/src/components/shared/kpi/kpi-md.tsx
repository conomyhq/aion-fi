import * as React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import { cn } from "@/lib/utils";

interface KPICardProps {
  icon?: LucideIcon;
  iconColor?: string;
  textHeader?: string;
  textTitle?: string;
  cardTitle?: string;
  cardContent?: string;
  cardFooter?: string;
  className?: string;
}

const KPICardMd = React.forwardRef<HTMLDivElement, KPICardProps>(
  ({ 
    icon: Icon, 
    iconColor = "text-muted-foreground",
    textHeader,
    textTitle,
    cardTitle,
    cardContent,
    cardFooter,
    className,
    ...props 
  }, ref) => {
    return (
      <Card ref={ref} className={cn("fintech-card space-y-2", className)} {...props}>
        {textHeader && (
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
              {Icon && <Icon className={cn("h-4 w-4", iconColor)} />}
              {textHeader && <span>{textHeader}</span>}
            </CardTitle>
          </CardHeader>
        )}
        
        {textTitle && (
          <CardTitle className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
          {Icon && <Icon className={cn("h-4 w-4", iconColor)} />}
          {textTitle && <span>{textTitle}</span>}
        </CardTitle>
        )}
        
        <CardContent>
          <div className="flex items-center justify-between">
            {cardContent && (
              <p className="text-xl font-semibold">
                {cardContent}
              </p>
            )}
          </div>
        </CardContent>
        
        {cardFooter && (
          <CardFooter className="pt-0">
            <p className="text-xs text-muted-foreground">
              {cardFooter}
            </p>
          </CardFooter>
        )}
      </Card>
    );
  }
);

KPICardMd.displayName = "KPICardMd";

export { KPICardMd };
