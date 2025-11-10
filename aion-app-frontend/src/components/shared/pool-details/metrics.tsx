import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { formatPercentage } from "@/shared/utils/format"
import { Vault } from "@/domain/entities/pool"
import { PoolRecentActivity } from "./recent-activity"

interface PoolMetricsProps {
    vault: Vault
}


export const PoolMetrics = ({ vault }: PoolMetricsProps) => {
    return (
        <Card>
        <CardHeader className="p-0 mb-5">
            <CardTitle className="flex flex-col space-y-1 items-start">
            <div className="flex items-left space-x-1">
            <TrendingUp className="mr-2 h-4 w-4 text-quinary" />
          <span className="font-semibold">Pool Details Analytics</span>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
          Historical performance and metrics
        </p>
            </CardTitle>
        </CardHeader>
        <p className="text-sm text-muted-foreground font-medium mb-1">
                    Historical Performance
                </p>
        <CardContent>
            <div className="flex flex-col space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
                    <Card className="bg-tertiary-10 border-tertiary-1 shadow-none">
                        <CardContent className="flex flex-col items-center justify-center">
                        <p className="text-lg text-tertiary font-semibold">
                        {formatPercentage(vault.metrics.apy_metrics.supply_apy_30_days_avg_bps/100)}
                        </p>
                        <p className="text-sm text-black/70 font-regular">
                            30-day APY
                        </p>
                    </CardContent>
                    </Card>
                    <Card className="bg-primary-10 border-primary-1 shadow-none">
                        <CardContent className="flex flex-col items-center justify-center">
                        <p className="text-lg text-primary font-semibold">
                        {formatPercentage(vault.metrics.apy_metrics.supply_apy_90_days_avg_bps/100)}
                        </p>
                        <p className="text-sm text-black/70 font-regular">
                            90-day APY
                        </p>
                    </CardContent>
                    </Card>
                    <Card className="bg-secondary-10 border-secondary-1 shadow-none">
                        <CardContent className="flex flex-col items-center justify-center">
                        <p className="text-lg text-secondary font-semibold">
                        {formatPercentage(vault.metrics.default_rate_pct/100)} {/* 2.00% */}
                        </p>
                        <p className="text-sm text-black/70 font-regular">
                            Default Rate
                        </p>
                    </CardContent>
                    </Card>
                </div>
                <div className="border-t border-border h-1 w-full"></div>
                <PoolRecentActivity  />

            </div>
        </CardContent>
     </Card>
    )
}