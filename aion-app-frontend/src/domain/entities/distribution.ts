export interface Distribution {
  id: string;
  date: Date;
  pool_id: string;
  gross_fees_usdc: number;
  protocol_fee_usdc: number;
  net_distributed_usdc: number;
  net_yield_bps: number;
}

export type DistributionStatus = 'completed' | 'pending' | 'failed';

export interface DistributionHistoryPoint {
  id: string;
  poolName: string;
  amount: number;
  recipients: number;
  timestamp: Date;
  status: DistributionStatus;
  userClaim: { amount: number; claimed: boolean; claimedAt: Date };
}