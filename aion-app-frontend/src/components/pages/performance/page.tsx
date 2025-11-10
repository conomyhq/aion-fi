'use client'

import { Card } from "@/components/ui/card"
import { formatPercentage } from "@/shared/utils/format"
import { CardTitle } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { AlertCircle } from "lucide-react"
import { CardHeader } from "@/components/ui/card"
import { useVaultContext } from "@/components/context/vault"


export default function PerformancePage() {

  const { vault } = useVaultContext();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
        <CardTitle className="flex flex-col space-y-1 items-start">
    <span className="font-semibold">Performance Metrics</span>
    <p className="text-sm text-muted-foreground font-medium">
    Detailed analysis of your investment
  </p>
      </CardTitle>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">30-day return</div>
                <div className="text-xl text-tertiary">{formatPercentage(vault.metrics.apy_metrics.supply_apy_30_days_avg_bps/100)}</div>
              </div>
              <div>
                <div className="text-sm text-mute-foreground mb-1">90-day return</div>
                <div className="text-xl text-tertiary">{formatPercentage(vault.metrics.apy_metrics.supply_apy_90_days_avg_bps/100)}</div>
              </div>
              <div>
                <div className="text-sm text-mute-foreground mb-1">YTD return</div>
                <div className="text-xl text-tertiary">{formatPercentage(vault.metrics.apy_metrics.supply_apy_180_days_avg_bps/100)}</div>
              </div>
              <div>
                <div className="text-sm text-mute-foreground mb-1">Annualized</div>
                <div className="text-xl">{formatPercentage(vault.metrics.apy_metrics.supply_apy_365_days_avg_bps/100)}</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-mute-forenground">Best month:</span>
                <span className="text-secondary">
                { vault.metrics?.apy_metrics?.supply_apy_best_month_bps! ? formatPercentage(vault.metrics?.apy_metrics.supply_apy_best_month_bps!/100) : 0}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-mute-forenground">Worst month:</span>
                <span className="text-quaternary">{ vault.metrics?.apy_metrics?.supply_apy_worst_month_bps! ? formatPercentage(vault.metrics?.apy_metrics.supply_apy_worst_month_bps!/100) : 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm tute-forenground">Consistency:</span>
                <span>{vault.metrics.apy_metrics.supply_apy_consistency_score && (vault.metrics.apy_metrics.supply_apy_consistency_score || 0) > 0.5 ? 'High' : 'Low'}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-0 mb-5">
          <CardTitle className="flex flex-col space-y-1 items-start">
      
          <span className="font-semibold">Risk Assetment</span>
          <p className="text-sm text-muted-foreground font-medium">
          Current risk profile of your investment
          </p>
        </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Risk Level</span>
                  <span className="text-sm">{vault.risk_level}</span>
                </div>
                <Progress value={vault.risk_level === 'low' ? 100 : vault.risk_level === 'medium' ? 50 : 3} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Diversification</span>
                  <span className="text-sm">{vault.metrics.diversification_score && (vault.metrics.diversification_score || 0) > 0.5 ? 'Good' : 'Bad'}</span>
                </div>
                <Progress value={vault.metrics.diversification_score && (vault.metrics.diversification_score || 0) * 100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Liquidity</span>
                  <span className="text-sm">{vault.metrics.liquidity_score && (vault.metrics.liquidity_score || 0) > 0.5 ? 'Locked' : 'Unlocked'}</span>
                </div>
                <Progress value={vault.metrics.liquidity_score && (vault.metrics.liquidity_score || 0) * 100} className="h-2" />
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-primary-10 rounded-lg">
                <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary">
                  Your investment is performing within expected parameters. Current default rate: {formatPercentage(vault.metrics.default_rate_pct*100)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
           
    )
}