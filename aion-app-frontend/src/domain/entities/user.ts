import { ApyMetrics } from "./pool";
import { Transaction } from "./transaction";

interface BaseUser {
  kyc_status: KycStatus;
  joined_at: Date;
  last_activity: Date;
}

export interface User extends BaseUser {
  id?: string;
  email?: string;
  identity?: Identity;
}

interface IdentityDocument {
  document_number: string;
  document_type: string;
  document_country: string;
  document_front_image: string;
  document_back_image: string;
  document_selfie_image: string;
}

export interface Identity {
  first_name: string;
  last_name: string;
  phone_number: string;
  date_of_birth: Date;
  nationality: string;
  gender: string;
  document?: IdentityDocument;
}

export type KycStatus = 'unverified' | 'pending' | 'verified' | 'rejected';

export interface Wallet {
  id?: string;
  address: string;
  display_name: string;
  total_invested?: number;
  total_earnings?: number;
  active_positions?: number;
  completed_transactions?: number;
  user: User;
  metrics?: ApyMetrics;
  ownership_bps?: number;
  transactions?: Transaction[];
  performance?: Performance[];
  positions?: Position[];
  joined_at?: Date;
  last_activity?: Date;
}

export interface Position {
  id: string;
  user_address: string;
  pool_id: string;
  amount_usdc: number;
  shares: number;
  deposit_at: Date;
  lock_until: Date;
  status: 'active' | 'redeemed' | 'pending';
  ref_id?: string;
}

export interface Performance {
  date: Date;
  value: number;
  apy_bps: number;
  currency: string;
  ownership_bps?: number;
  earnings: number;
}


