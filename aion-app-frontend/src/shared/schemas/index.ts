import { z } from 'zod';

// Pool schemas
export const PoolSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Pool name is required'),
  lock_days: z.number().int().positive('Lock days must be positive'),
  target_apy_bps: z.number().int().nonnegative('Target APY BPS cannot be negative'),
  tvl_usdc: z.number().nonnegative('TVL cannot be negative'),
  occupancy_pct: z.number().min(0).max(100, 'Occupancy must be between 0-100%'),
  default_rate_pct: z.number().min(0).max(100, 'Default rate must be between 0-100%'),
  description: z.string().optional(),
});

export const PoolHistoryPointSchema = z.object({
  pool_id: z.string(),
  date: z.date(),
  nav_usdc: z.number().nonnegative('NAV cannot be negative'),
  realized_apy_bps: z.number().int().nonnegative('Realized APY BPS cannot be negative'),
  default_rate_pct: z.number().min(0).max(100, 'Default rate must be between 0-100%'),
});

// User schemas
export const UserSchema = z.object({
  address: z.string().regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid Ethereum address'),
  kyc_status: z.enum(['unverified', 'pending', 'verified']),
});

export const PositionSchema = z.object({
  id: z.string(),
  user_address: z.string().regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid Ethereum address'),
  pool_id: z.string(),
  amount_usdc: z.number().positive('Amount must be positive'),
  shares: z.number().positive('Shares must be positive'),
  deposit_at: z.date(),
  lock_until: z.date(),
  status: z.enum(['active', 'redeemed', 'pending']),
  ref_id: z.string().optional(),
});

export const CreatePositionSchema = z.object({
  pool_id: z.string().min(1, 'Pool ID is required'),
  amount_usdc: z.number().positive('Amount must be positive'),
  user_address: z.string().regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid Ethereum address'),
  ref_id: z.string().optional(),
});

// Distribution schema
export const DistributionSchema = z.object({
  id: z.string(),
  date: z.date(),
  pool_id: z.string(),
  gross_fees_usdc: z.number().nonnegative('Gross fees cannot be negative'),
  protocol_fee_usdc: z.number().nonnegative('Protocol fee cannot be negative'),
  net_distributed_usdc: z.number().nonnegative('Net distributed cannot be negative'),
  net_yield_bps: z.number().int().nonnegative('Net yield BPS cannot be negative'),
});

// Explorer transaction schema
export const ExplorerTxSchema = z.object({
  tx_hash: z.string().regex(/^0x[a-fA-F0-9]{64}$/, 'Invalid transaction hash'),
  block_time: z.date(),
  type: z.enum(['deposit', 'advance', 'settle', 'withdraw']),
  pool_id: z.string(),
  from: z.string().regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid from address'),
  to: z.string().regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid to address'),
  amount_usdc: z.number().positive('Amount must be positive'),
  status: z.enum(['success', 'failed']),
});

// Earning point schema
export const EarningPointSchema = z.object({
  date: z.date(),
  principal_usdc: z.number().nonnegative('Principal cannot be negative'),
  accrued_net_usdc: z.number().nonnegative('Accrued net cannot be negative'),
});

// Type exports
export type PoolInput = z.infer<typeof PoolSchema>;
export type PoolHistoryPointInput = z.infer<typeof PoolHistoryPointSchema>;
export type UserInput = z.infer<typeof UserSchema>;
export type PositionInput = z.infer<typeof PositionSchema>;
export type CreatePositionInput = z.infer<typeof CreatePositionSchema>;
export type DistributionInput = z.infer<typeof DistributionSchema>;
export type ExplorerTxInput = z.infer<typeof ExplorerTxSchema>;
export type EarningPointInput = z.infer<typeof EarningPointSchema>;