import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";
import { KycStatus, Wallet } from "@/domain/entities/user";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

interface KycCardProps {
  account: Wallet | null;
  mounted: boolean;
  getStatusDescription: () => string;
  updateAccount: (account: Wallet) => void;
}


export const KycCard: React.FC<KycCardProps> = ({
  account,
  mounted,
  updateAccount,
  getStatusDescription,
}) => {
  const router = useRouter();


  return (
    <Card className="space-y-6">
      <CardContent className="text-black/60 font-regular space-y-3">
        <CardTitle className="text-lg text-black/90 font-medium">
          <Shield className="mr-2 h-4 w-4 text-quaternary" />
          Verification Status
        </CardTitle>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-black/70 font-medium">Account Verification</p>
            <p className="text-xs text-muted-foreground">
              Wallet verification status
            </p>
          </div>
          {mounted ? (
          <div className="ml-4 flex items-center">
                  <div className="flex items-center gap-2 px-2 py-1 bg-tertiary-10 rounded-sm border border-tertiary-10">
                    <div className="h-2 w-2 bg-[var(--success)] rounded-full animate-pulse"></div>
                    <span className="text-xs text-[var(--success)] font-medium">
                    connected
                    </span>
                  </div>
              </div>
          ) : (
            <div className="flex items-center gap-2 px-2 py-1 bg-quaternary-10 rounded-sm border border-quaternary-10">
              <div className="h-2 w-2 bg-[var(--error)] rounded-full animate-pulse"></div>
              <span className="text-xs text-[var(--quaternary)] font-medium">
                disconnected
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-black/79 font-medium">KYC Verification</p>
            <p className="text-xs text-muted-foreground">
            Identity verification for enhanced security
            </p>
          </div>
          <div className="ml-4 flex items-center">
          { (account?.user.kyc_status === 'verified')  && (
                  <div className="flex items-center gap-2 px-2 py-1 bg-tertiary-10 rounded-sm border border-tertiary-10">
                    <div className="h-2 w-2 bg-[var(--success)] rounded-full animate-pulse"></div>
                    <span className="text-xs text-[var(--success)] font-medium">
                     {getStatusDescription()}
                    </span>
                  </div>
                   )}

                { (account?.user.kyc_status === 'unverified')  && (
                    <div className="flex items-center gap-2 px-2 py-1 bg-quaternary-10 rounded-sm border border-quaternary-10">
                    <div className="h-2 w-2 bg-[var(--error)] rounded-full animate-pulse"></div>
                    <span className="text-xs text-[var(--quaternary)] font-medium">
                    {getStatusDescription()}
                    </span>
                  </div>
                   )}

                { (account?.user.kyc_status === 'pending')  && (
                  <div className="flex items-center gap-2 px-2 py-1 bg-quinary-10 rounded-sm border border-quinary-10">
                    <div className="h-2 w-2 bg-[var(--warning)] rounded-full animate-pulse"></div>
                    <span className="text-xs text-[var(--quinary)] font-medium">
                    {getStatusDescription()}
                    </span>
                  </div>
                   )}

                { (account?.user.kyc_status === 'rejected')  && (
                  <div className="flex items-center gap-2 px-2 py-1 bg-quaternary-10 rounded-sm border border-quaternary-10">
                    <div className="h-2 w-2 bg-[var(--error)] rounded-full animate-pulse"></div>
                    <span className="text-xs text-[var(--quaternary)] font-medium">
                    {getStatusDescription()}
                    </span>
                  </div>
                   )}
              </div>
        </div>
        
      </CardContent>
      {account?.user.kyc_status !== "verified" && account && mounted && (
        <div className="p-4 bg-[#F9FAFB] rounded-lg">
        <p className="text-sm font-medium mb-2">Complete KYC Verification</p>
        <p className="text-sm text-muted-foreground mb-3">
          Verify your identity to unlock higher investment limits and additional features.
        </p>
        <Button
          className="w-full mt-2"
          variant="default"
          onClick={() => {
            if (!account) return;
            // updateKycStatus("verified" as KycStatus);
            const next: Wallet = {
              ...account,
              active_positions: 1,
              completed_transactions: 100,
              total_invested: 2000,
              total_earnings: 100,
              ownership_bps: 100,
              metrics: {
                supply_apy_bps: 2380,
                supply_apy_7_days_avg_bps: 2380,
                supply_apy_30_days_avg_bps: 2380,
                supply_apy_90_days_avg_bps: 2380,
                supply_apy_180_days_avg_bps: 2380,
                supply_apy_365_days_avg_bps: 2380,
              },
              user: {
                ...account.user,
              
              email: "pablo@aion.fi",
              kyc_status: "verified",
              identity : {
              first_name: "Pablo",
              last_name: "Acuña",
              phone_number: "+561111111111",
              date_of_birth: new Date("1991-01-15"),
              nationality: "CHL",
              gender: "male",
              document: {
                  document_number: "17600001-1",
                  document_type: "DNI",
                  document_country: "CHL",
                  document_front_image: "",
                  document_back_image: "",
                  document_selfie_image: "",
                },
              },
          },
          transactions: [{
              date: new Date('2025-01-07'),
              amount: 1000,
              status: 'success',
              type: 'reward',
              description: 'payment week 1',
              currency: 'USDC',
              txHash: '0x1234567890',
              id: '1',
            },
            {
              date: new Date('2025-01-14'),
              amount: 1000,
              status: 'success',
              type: 'reward',
              description: 'payment week 2',
              currency: 'USDC',
              txHash: '0x1234567890',
              id: '2',
            },
            {
              date: new Date('2025-01-21'),
              amount: 1000,
              status: 'success',
              type: 'reward',
              description: 'payment week 3',
              currency: 'USDC',
              txHash: '0x1234567890',
              id: '3',
            },
            {
              date: new Date('2025-01-28'),
              amount: 1000,
              status: 'success',
              type: 'reward',
              description: 'payment week 4',
              currency: 'USDC',
              txHash: '0x1234567890',
              id: '4',
            },
            {
              date: new Date('2025-02-04'),
              amount: 1000,
              status: 'success',
              type: 'reward',
              description: 'payment week 5',
              currency: 'USDC',
              txHash: '0x1234567890',
              id: '5',
            },
            {
              date: new Date('2025-02-11'),
              amount: 1000,
              status: 'success',
              type: 'reward',
              description: 'payment week 6',
              currency: 'USDC',
              txHash: '0x1234567890',
              id: '6',
            },
            {
              date: new Date('2025-02-18'),
              amount: 1000,
              status: 'success',
              type: 'reward',
              description: 'payment week 7',
              currency: 'USDC',
              txHash: '0x1234567890',
              id: '7',
            },
            {
              date: new Date('2025-02-25'),
              amount: 1000,
              status: 'success',
              type: 'reward',
              description: 'payment week 8',
              currency: 'USDC',
              txHash: '0x1234567890',
              id: '8',
            },
          ],
          performance: [{
              date: new Date('2025-01-01'),
              value: 1000,
              apy_bps: 2300,
              currency: 'USDC',
              earnings: 10,
            },
            {
              date: new Date('2025-02-01'),
              value: 1010,
              apy_bps: 2300,
              currency: 'USDC',
              earnings: 230,
            },
            {
              date: new Date('2025-03-01'),
              value: 1020,
              apy_bps: 2300,
              currency: 'USDC',
              earnings: 10,
            },
            {
              date: new Date('2025-04-01'),
              value: 1030,
              apy_bps: 2300,
              currency: 'USDC',
              earnings: 10,
            },
            {
              date: new Date('2025-05-01'),
              value: 1040,
              apy_bps: 2300,
              currency: 'USDC',
              earnings: 10,
            },
            {
              date: new Date('2025-06-01'),
              value: 1050,
              apy_bps: 2300,
              currency: 'USDC',
              earnings: 10,
            },
            {
              date: new Date('2025-07-01'),
              value: 1060,
              apy_bps: 2300,
              currency: 'USDC',
              earnings: 10,
            },
            {
              date: new Date('2025-08-01'),
              value: 1070,
              apy_bps: 2300,
              currency: 'USDC',
              earnings: 10,
            },
          ],
        };
           
          window.open("https://saas-onboarding.incodesmile.com/conomyprod982/flow/689df76d7dc9d06d7661efab", "_blank");
          updateAccount(next);
          router.push("/dashboard");
          }}>
          
          <span className="font-semibold">Verify KYC</span>
        </Button>
        </div>
      )}
    </Card>
  );
};