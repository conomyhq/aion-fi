import { Vault } from "@/domain/entities/pool";


export const vaultData: Vault = {
    name: 'Merchant Advance',
    short_description: 'Funds are used to provide early settlements to merchants who normally receive their payouts with a T+2 delay, fully backed by receivables from licensed acquirers.',
    target_apy_bps: 2328,
    min_investment_amount: 100,
    lockup_period_days: 7,
    deployment_date: new Date('2025-01-01'),
    risk_level: 'low',
    metrics: {
      total_supplied: 200000,
      total_borrowed: 144000,
      occupancy_pct: 0.72,
      default_rate_pct: 0.02,
      diversification_score: 0.8,
      liquidity_score: 0.56,
      apy_metrics: {
        supply_apy_bps: 2328,
        supply_apy_7_days_avg_bps: 2328,
        supply_apy_30_days_avg_bps: 2328,
        supply_apy_90_days_avg_bps: 2068,
        supply_apy_180_days_avg_bps: 2068,
        supply_apy_365_days_avg_bps: 2068,
        supply_apy_best_month_bps: 2068,
        supply_apy_worst_month_bps: 2068,
        supply_apy_consistency_score: 0.8,
      },
    },
    fee_structure: {
      early_withdrawal_fee_bps: 50,
      management_fee_bps: 300,
      performance_fee_bps: 0,
      protocol_fee_bps: 0,
    },
    vault_address: '0x1234567890',
    token: {
      address: '0x1234567890',
      symbol: 'USDC',
      decimals: 18,
    }
  };