import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import * as React from "react"

interface KPICardProps {
    icon?: LucideIcon;
    iconColor?: string;
    iconBackgroundColor?: string;
    textHeader?: string;
    textTitle?: string;
    cardTitle?: string;
    cardContent?: string;
    cardFooter?: string;
    className?: string;
  }



 const KPICardLg = React.forwardRef<HTMLDivElement, KPICardProps>(
    ({ 
        icon: Icon, 
        iconColor = "text-gray-500",
        textHeader,
        textTitle,
        cardTitle,
        cardContent,
        iconBackgroundColor,
        cardFooter,
        className,
        ...props 
    }, ref) => {
    return (
        <Card ref={ref} className={cn("fintech-card space-y-2", className) } {...props}>
        <div className="flex items-center justify-between">
        <div className="mr-6">
        {textHeader && (
            <CardHeader className="pb-2">
                <CardTitle className="flex items-start text-sm font-medium text-muted-foreground mb-1">
                    {textHeader && <span>{textHeader}</span>}
                </CardTitle>
            </CardHeader>
        )}
        {textTitle && (
            <CardTitle className="flex items-start text-sm font-medium text-muted-foreground mb-1">
                {textTitle && <span>{textTitle}</span>}
            </CardTitle>
        )}
        <CardContent>
          <div className="flex items-start">
            <div>
              <p className="text-2xl">{cardContent}</p>
            </div>
          </div>
        </CardContent>
        </div>
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", iconBackgroundColor)}>
             {Icon && <Icon className={cn("w-6 h-6", iconColor)} />}
        </div>
        </div>
      </Card>   
    )       
})

KPICardLg.displayName = "KPICardLg";

export { KPICardLg };
