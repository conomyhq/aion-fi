export interface Transaction {
    id: string;
    type: 'deposit' | 'withdrawal' | 'reward';
    description: string;
    pool_id?: string;
    currency: string;
    amount: number;
    status: 'success' | 'pending' | 'failed';
    date: Date;
    txHash: string;
}

export type TransactionType = 'deposit' | 'withdrawal' | 'reward';

export interface MarketStats {
    totalVolume24h: number;
    totalTransactions24h: number;
    activeUsers24h: number;
    topPerformer: string;
    topPerformerApy: number;
}