'use client'

import { useAccountContext, useMountedContext } from "@/components/context/account";
import { KycCard } from "@/components/shared/kyc/kyc-card";


export default function KycStatusPage() {
    const { account, getStatusLabel, updateAccount } = useAccountContext();
    const { mounted } = useMountedContext();

  return (
    <KycCard
          mounted={mounted}
          account={account}
          getStatusDescription={getStatusLabel}
          updateAccount={updateAccount}

          />
  )
}