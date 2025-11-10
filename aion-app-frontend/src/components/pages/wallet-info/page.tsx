'use client'

import { useAccountContext, useMountedContext } from "@/components/context/account";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/shared/utils/format";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Globe } from "lucide-react";


export default function WalletInfoPage() {
    const { account } = useAccountContext();
  return (
    <div className="space-y-6">
    <Card>
    <CardHeader className="p-0 mb-5">
      <CardTitle className="flex items-center space-x-2">
        <Wallet className="h-5 w-5 text-secondary" />
        <span className="text-black/90 font-medium text-lg">Wallet Information</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col space-y-4 grid grid-cols-1 lg:grid-cols-1 gap-4">
        <div className="col-span-1 space-y-2">
            <div className="text-sm text-muted-foreground font-semibold">Address</div>
            <div className="flex items-center space-x-1">
              <code className="text-sm bg-[#F9FAFB] px-2 py-1 rounded font-mono">
                {account?.address}
              </code>
              <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(account?.address || '')}>
                <Copy className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(account?.address || '')}>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
            <div className="text-sm text-muted-foreground font-semibold">Network</div>
            <div className="flex items-center">
              <code className="text-sm py-1 rounded font-mono">
                Stellar
              </code>
            </div>
          </div>
    </CardContent>
  </Card>
  <Card>
      <CardHeader className="p-0 mb-5">
        <CardTitle className="flex items-center space-x-2">
          <Globe className="h-5 w-5 text-primary" />
          <span className="text-black/90 font-medium text-lg">Portfolio Summary</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-left justify-between">
        <div className="">
          <p className="text-md text-muted-foreground">Total Invested</p>
          <p className="text-md font-bold text-tertiary">{formatCurrency(account?.total_invested || 0)}</p>
        </div>
        <div className="">
          <p className="text-md text-muted-foreground">Total Earnings</p>
          <p className="text-md font-bold text-tertiary">+{formatCurrency(account?.total_earnings || 0)}</p>
        </div>
        
          <div className="">
            <p className="text-md text-muted-foreground">Active Positions</p>
            <p className="text-md font-semibold text-tertiary">{account?.active_positions}</p>
          </div>
          <div className="">
            <p className="text-md text-muted-foreground">Transactions</p>
            <p className="text-md font-semibold text-tertiary">{account?.completed_transactions}</p>
          </div>
    
      </CardContent>
    </Card>
    </div>
  )
}