import { Card, CardContent } from "@/components/ui/card"
import { Transaction } from "@/domain/entities/transaction"
import { cn } from "@/lib/utils"


interface TransactionItemConfig {
    className?: string
    textClass?: string
    valueClass?: string
    icon?: React.ReactNode
    iconClass?: string
}

interface TransactionItemProps {
    title: string
    subtitle?: string
    icon?: React.ReactNode
    value: React.ReactNode
    subValue?: string
    config?: TransactionItemConfig
}


export const TransactionItem = ({ title, subtitle, icon, value, subValue, config }: TransactionItemProps) => {

    return (
    <Card className={cn("w-full shadow-none  rounded p-2 px-3", config?.className)}>
            <CardContent className="flex justify-between items-center">
                <div className="flex items-start space-x-2">
                    {icon && <div className={cn("", config?.iconClass)}>{icon}</div>}
                    <div className="flex flex-col">
                        <p className={cn("text-sm text-black/90 font-medium", config?.textClass)}>{title}</p>
                        {subtitle && <p className={cn("text-xs text-black/50 font-regular", config?.valueClass)}>{subtitle}</p>}
                    </div>
                </div>
                <div className="flex flex-col items-end">                    
                <div className={cn("text-sm text-black/90 font-medium", config?.textClass)}>
                {value}
                </div>
                {subValue && <p className={cn("text-xs text-black/50 font-regular", config?.valueClass)}>{subValue}</p>}
                </div>
            </CardContent>
        </Card>
    )
}