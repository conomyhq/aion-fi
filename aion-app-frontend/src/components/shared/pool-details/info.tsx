import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { formatCurrency } from "@/shared/utils/format"
import { Vault } from "@/domain/entities/pool"
import { formatDate } from "@/shared/utils/format"
import { formatPercentage } from "@/shared/utils/format"


interface PoolDetailsProps {
    vault: Vault
}
export const PoolInfo = ({ vault }: PoolDetailsProps) => {
    return (
        <Card>
        <CardHeader className="p-0 mb-5">
            <CardTitle >
                <p className="font-semibold"> Pool Details</p>
            </CardTitle>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground font-medium">
            Minimum Investment
            </p>
            <p className="text-sm text-black/70 font-medium">
            {formatCurrency(vault.min_investment_amount)} {/* $100 */}
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-muted-foreground font-medium">
            Lockup Period
            </p>
            <p className="text-sm text-black/70 font-medium">
            {vault.lockup_period_days} days {/* 7 days */}
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-muted-foreground font-medium">
            Deployment Date
            </p>
            <p className="text-sm text-black/70 font-medium">
            {formatDate(vault.deployment_date)}
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-muted-foreground font-medium">
            Next Distribution
            </p>
            <p className="text-sm text-black/70 font-medium">
            7 days
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-muted-foreground font-medium">
            Management Fee
            </p>
            <p className="text-sm text-black/70 font-medium">
            {formatPercentage(vault.fee_structure.management_fee_bps/100)} {/* 3.00% */}
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-muted-foreground font-medium">
            Early Withdrawal Fee
            </p>
            <p className="text-sm text-black/70 font-medium">
            {formatPercentage(vault.fee_structure.early_withdrawal_fee_bps/100)} {/* 0.50% */}
            </p>
          </div>
        </div>
        </CardContent>
     </Card>
    )
}