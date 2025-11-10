import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { formatLargeNumber } from "@/shared/utils/format"
import { Progress } from "@/components/ui/progress"
import { formatPercentage } from "@/shared/utils/format"
import { Vault } from "@/domain/entities/pool"

interface OcupancyProps {
    vault: Vault
}



export const Ocupancy = ({ vault }: OcupancyProps) => {
    return (
        <Card>
        <CardHeader className="p-0 mb-5">
          <CardTitle className="flex flex-col items-start">
          <div className="flex items-left space-x-1">
          <TrendingUp className="mr-2 h-4 w-4 text-secondary" />
            <span className="font-semibold">Pool Utilization</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
            Current capacity and availability
          </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-1 w-full">
          <div className="flex items-center justify-between w-full">
              <div>
              <span className="text-sm text-black/70 font-medium">Utilized: {formatLargeNumber(vault.metrics.total_supplied*vault.metrics.occupancy_pct)}</span> {/* 90% */}
              </div>
              <div>
              <span className="text-sm text-black/70 font-medium">Available: {formatLargeNumber(vault.metrics.total_supplied - vault.metrics.total_borrowed)}</span>
              </div>
          </div>
              <Progress value={vault.metrics.occupancy_pct * 100} />
              <p className="text-sm text-muted-foreground font-medium">
                  Total available: {formatPercentage((1-vault.metrics.occupancy_pct)*100)}
              </p>
          </div>
          
          </CardContent>
       </Card>
    )
}