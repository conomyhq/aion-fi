import { Card, CardContent } from "@/components/ui/card"
import { Transaction } from "@/domain/entities/transaction"
import { TransactionItem } from "../transaction-item/transaction-item"

interface PoolRecentActivityProps {
    recentActivity?: Transaction[] | null
}


export const PoolRecentActivity = ({ recentActivity }: PoolRecentActivityProps) => {
    return (
        <div className="flex flex-col space-y-2">
        <p className="text-sm text-muted-foreground font-medium">
        Recent Activity
        </p>
        <TransactionItem 
        title="New Investment" 
        subtitle="2 minutes ago" 
        config={{
            className: "bg-[#F9FAFB]"
        }}
        value="$35,000" />
        <TransactionItem 
        title="Distribution Paid" 
        subtitle="1 day ago" 
        config={{
            className: "bg-[#F9FAFB]"
        }}
        value="$2,300" />
        <TransactionItem 
        title="New Receivable Added" 
        subtitle="1 day ago" 
        config={{
            className: "bg-[#F9FAFB]"
        }}
        value="$8,000" />
        </div>
    )
};