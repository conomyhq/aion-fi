'use client'

import { TransactionItem } from "@/components/shared/transaction-item/transaction-item";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { formatDate } from "@/shared/utils/format";
import { formatCurrency } from "@/shared/utils/format";
import { CheckCircle } from "lucide-react";
import { useAccountContext } from "@/components/context/account";



export default function DistributionPage() {
  const { account } = useAccountContext();
  return (
    <Card>
    <CardHeader className="p-0 mb-5">
      <CardTitle className="font-semibold text-lg flex flex-col space-y-1 items-start">Distribution History
       <p className="text-sm text-muted-foreground">Track all your received distributions</p></CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {account?.transactions?.map((distribution, index) => (
          <TransactionItem
            key={distribution.id}
            title={formatCurrency(distribution.amount)}
            subtitle={formatDate(distribution.date)}
            value={
              <div className="text-right">
                <div className="bg-tertiary-10 text-tertiary border-tertiary-50 px-2 rounded-sm text-md mb-1">
                  {distribution.status}
                </div>
              </div>
            }
            icon={
              <div className="w-10 h-10 bg-tertiary-10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-tertiary" />
              </div>
            }
            subValue={`week ${index + 1}`}
            config={{
              className: "bg-[#FAFAFA] p-4 rounded-lg",
              textClass: "font-medium",
              
            }} /> 
        ))}
      </div>
    </CardContent>
  </Card>
  )
}