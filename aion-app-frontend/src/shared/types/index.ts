export type { Pool, PoolHistoryPoint } from '../../domain/entities/pool';
export type { User, Position, EarningPoint } from '../../domain/entities/user';
export type { Distribution } from '../../domain/entities/distribution';
export type { ExplorerTx } from '../../domain/entities/explorerTx';

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export type WalletStatus = 'disconnected' | 'connecting' | 'connected';

export interface ConnectedWallet {
  address: string;
  chainId: number;
  balance?: string;
}

export interface Settings {
  email: string;
  notifications: {
    emailUpdates: boolean;
    pushNotifications: boolean;
    transactionAlerts: boolean;
    marketingEmails: boolean;
  };
  privacy: {
    profileVisible: boolean;
    shareAnalytics: boolean;
    twoFactorEnabled: boolean;
  };
  preferences: {
    language: string;
    currency: string;
    theme: string;
  };
}