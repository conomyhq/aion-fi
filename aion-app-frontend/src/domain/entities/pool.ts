export type RiskLevel = 'low' | 'medium' | 'high';
export type FeeType = 'management' | 'performance' | 'protocol';

export interface ApyMetrics {
  supply_apy_bps: number;
  supply_apy_7_days_avg_bps: number;
  supply_apy_30_days_avg_bps: number;
  supply_apy_90_days_avg_bps: number;
  supply_apy_180_days_avg_bps: number;
  supply_apy_365_days_avg_bps: number;
  supply_apy_best_month_bps?: number;
  supply_apy_worst_month_bps?: number;
  supply_apy_consistency_score?: number;
}

export interface VaultMetrics {
  total_supplied: number;
  total_borrowed: number;
  occupancy_pct: number;
  default_rate_pct: number;
  apy_metrics: ApyMetrics;
  diversification_score?: number;
  liquidity_score?: number;
}

export interface FeeStructure {
  management_fee_bps: number;
  performance_fee_bps: number;
  protocol_fee_bps: number;
  early_withdrawal_fee_bps: number;
}

export interface TokenInfo {
  address: string;
  symbol: string;
  decimals: number;
  image_url?: string;
  name?: string;
}

export interface BaseVault {
  name: string;
  lockup_period_days: number;
  target_apy_bps: number;
  min_investment_amount: number;
  deployment_date: Date;
  risk_level: RiskLevel;
  short_description?: string;
  long_description?: string;
  image_url?: string;
  website_url?: string;
  twitter_url?: string;
  discord_url?: string;
}

export interface Vault extends BaseVault {
  vault_address: string;
  token: TokenInfo;
  metrics: VaultMetrics;
  fee_structure: FeeStructure;
  yield_generated?: VaultHistoryPoint[];
}

export interface VaultHistoryPoint {
  date: Date;
  vault_metrics: VaultMetrics;
  fee_structure: FeeStructure;
  apy_metrics: ApyMetrics;
}

