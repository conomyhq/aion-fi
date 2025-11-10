'use client'

import { Card, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { CardContent } from "@/components/ui/card"
import { ResponsiveContainer } from "recharts"
import { LineChart } from "recharts"
import { CartesianGrid } from "recharts"
import { XAxis } from "recharts"
import { YAxis } from "recharts"
import { Tooltip } from "recharts"
import { Line } from "recharts"
import { formatDate } from "@/shared/utils/format"
import { formatCurrency } from "@/shared/utils/format"
import { formatPercentage } from "@/shared/utils/format"
import { useVaultContext } from "@/components/context/vault"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Clock } from "lucide-react"
import { CardHeader } from "@/components/ui/card"
import { useAccountContext } from "@/components/context/account"

const nextDistribution = {
    date: new Date('2025-08-15'),
    amount: 120.32,
    currency: 'USDC',
}
export default function OverviewPage() {
    const { account } = useAccountContext();
    const { vault } = useVaultContext();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
        <CardTitle className="flex flex-col items-start gap-0 mb-5">
            <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="font-semibold text-lg">Investment Growth</span>
            </div>
            <p className="text-sm text-muted-foreground">Your investment performance over time</p>
        </CardTitle>
        <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={account?.performance || []}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="date" 
                      className="text-xs"
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => `${formatDate(value)}`}
                    />
                    <YAxis 
                      className="text-xs"
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => `${formatCurrency(value)}`}
                      overflow="visible"
                    />
                    <Tooltip 
                      formatter={(value, name) => [
                        `$${value}`, name === 'value' ? 'Portfolio Value' : '',
                       
                      ]}
                      labelFormatter={(label) => `Date: ${formatDate(label)}`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#009966" 
                      strokeWidth={3}
                      dot={{ fill: '#009966', strokeWidth: 0, r: 4 }}
                      activeDot={{ r: 6, fill: '#009966' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
        </Card>
          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardHeader className="p-0">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Next Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl text-tertiary mb-2">
                    {formatCurrency(nextDistribution.amount)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Expected on {formatDate(nextDistribution.date)}
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Average APY 30 days:</span>
                    <span>{formatPercentage(account?.metrics?.supply_apy_30_days_avg_bps!/100)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Average APY 90 days:</span>
                    <span className="text-orange-600">{formatPercentage(account?.metrics?.supply_apy_90_days_avg_bps!/100)}</span>
                  </div>
                </div>
                
                <Progress value={vault.metrics.occupancy_pct*100} className="h-2" />
                <div className="text-xs text-gray-500 text-center">
                  {formatPercentage(vault.metrics.occupancy_pct*100)} of total capacity used
                </div>
              </CardContent>
            </Card>
      </div>
      </div>
    )
}