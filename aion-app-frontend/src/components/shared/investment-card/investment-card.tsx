import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPercentage, formatCurrency } from '@/shared/utils/format';
import { Button } from "@/components/ui/button";
import { Vault } from "@/domain/entities/pool";
import { useState, useEffect } from "react";
import { Wallet } from "@/domain/entities/user";
import { X } from "lucide-react";
import { routerServerGlobal } from "next/dist/server/lib/router-utils/router-server-context";
import { useRouter } from "next/navigation";


interface InvestmentCardProps {
    vault: Vault;
    account: Wallet | null;
    updateAccount: (account: Wallet) => void;
    onClose?: () => void;
}

export const InvestmentCard = ({ vault, account, updateAccount, onClose }: InvestmentCardProps) => {
    const [investmentAmount, setInvestmentAmount] = useState<string>('');
    const router = useRouter();
    useEffect(() => {
        console.log('account', account);
    }, [account]);

    return (
        <Card className="space-y-5">
        <CardHeader className="p-0">
            <CardTitle>
                <div className="flex flex-col items-start w-full">
                    <div className="flex items-left justify-between w-full">
                    <p className="font-semibold text-lg">Invest</p>
                    {onClose && (
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="h-4 w-4" />
                    </Button>
                    )}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                Enter your investment amount to parcipate
                </p>
                </div>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col space-y-2">
            <Label htmlFor="amount">Investment Amount (USDC)</Label>
                <Input
                placeholder="1,000"
                className="w-full bg-[#F9FAFB]"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                type="number"
                />
                <div className="text-sm text-muted-foreground font-regular">
                Minimum: {formatCurrency(vault.min_investment_amount)}
                </div>
            </div>
            {investmentAmount && (
              <div className="bg-[#F9FAFB] p-4 rounded-lg space-y-2 mt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Investment Amount:</span>
                  <span className="font-medium">{formatCurrency(Number(investmentAmount))}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Estimated Annual Return:</span>
                  <span className="text-tertiary font-medium">
                    {formatCurrency(Number(investmentAmount)*(vault.metrics.apy_metrics.supply_apy_bps/10000))}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Protocol Fee {formatPercentage(vault.fee_structure.protocol_fee_bps/100)}:</span>
                  <span className="font-medium">{formatCurrency(Number(investmentAmount)*(vault.fee_structure.protocol_fee_bps/10000))}</span>
                </div>
              </div>
            )}
        </CardContent>
        <Button 
        className="w-full" 
        id="invest"
        variant={(account?.user?.kyc_status === 'verified' && investmentAmount) ? "default" : "disabled"}
        onClick={() => {
            if (account?.user?.kyc_status === 'verified' && investmentAmount) {
                updateAccount({
                    ...account,
                    completed_transactions: (account?.completed_transactions || 0) + 1,
                    active_positions: (account?.active_positions || 0) + 1,
                    total_invested: Number(investmentAmount) + (account?.total_invested || 0),
                    user: {
                        ...account.user,
                    }
                    
                });
                if (typeof onClose === 'function') {
                    onClose();
                } else {
                    router.push('/dashboard');
                }
            }
        }}
        >Invest</Button>
    </Card>
    )
}