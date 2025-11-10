'use client'

import { 
  DollarSign, 
  Users,
  Target,
  History
} from 'lucide-react';
import { formatLargeNumber, formatPercentage } from '@/shared/utils/format';
import { KPICardMd } from '@/components/shared/kpi/kpi-md';
import { useAccountContext, useMountedContext } from '@/components/context/account';
import Header from '@/components/ui/header';
import { KycCard } from '../../shared/kyc/kyc-card';
import { InvestmentCard } from '@/components/shared/investment-card/investment-card';
import { Ocupancy } from '../../shared/occupancy/ocupancy';
import { PoolInfo } from '@/components/shared/pool-details/info';
import { PoolMetrics } from '@/components/shared/pool-details/metrics';
import { useVaultContext } from '@/components/context/vault';


export default function PoolPage() {
  const { account, updateAccount, getStatusLabel } = useAccountContext();
  const { mounted } = useMountedContext();
  const { vault } = useVaultContext();
 
  return (

<div className="container mx-auto px-4">
    
{/* Header */}

<Header
  title= {vault.name}
  description= {vault.short_description || ''}
/>

<div className='grid grid-cols-12 gap-6'>
    <div className="col-span-9 space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       <KPICardMd
      textTitle="Total Supplied"
      cardContent={formatLargeNumber(vault.metrics.total_supplied)} //$200,000
      icon={DollarSign}
      iconColor="text-primary"
    />
    <KPICardMd
      textTitle="Total Borrowed"
      cardContent={formatLargeNumber(vault.metrics.total_borrowed)} //$200,000
      icon={Users}
      iconColor="text-primary"
    />
       <KPICardMd
      textTitle="Supply APY"
      cardContent={formatPercentage(vault.metrics.apy_metrics.supply_apy_bps/100)} //23.28%
      icon={Target}
      iconColor="text-secondary"
    />
    <KPICardMd 
      textTitle="Supply APY 7 days avg"
      cardContent={formatPercentage(vault.metrics.apy_metrics.supply_apy_7_days_avg_bps/100)} // 2 días 068%
      icon={History}
      iconColor="text-quaternary"
    />
     </div>
        <Ocupancy vault={vault} /> 
        <PoolInfo vault={vault} />
        <PoolMetrics vault={vault} />
</div>
    <div className="col-span-3 space-y-6">
      {account?.user.kyc_status !== 'verified' && (
    <KycCard 
        account={account} 
        mounted={mounted} 
        getStatusDescription={getStatusLabel} 
        updateAccount={updateAccount} 
    />
    )}
    <InvestmentCard 
        vault={vault} 
        account={account} 
        updateAccount={updateAccount} 
    />
    </div>
</div>
</div>
);
}