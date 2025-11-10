// Mock API functions to simulate backend endpoints
// In a real Next.js app, these would be actual API routes

import { Pool, PoolHistoryPoint } from '../../domain/entities/pool';
import { User, Position, EarningPoint } from '../../domain/entities/user';
import { Distribution } from '../../domain/entities/distribution';
import { ExplorerTx } from '../../domain/entities/explorerTx';
import { restEndpoints } from './restEndpoints';

// Re-export the new REST endpoints for backward compatibility
export const mockApiHandlers = {
  // GET /api/pools
  async getPools(): Promise<Pool[]> {
    return restEndpoints.getPools();
  },

  // GET /api/pools/:id/history
  async getPoolHistory(id: string): Promise<PoolHistoryPoint[]> {
    return restEndpoints.getPoolHistory(id);
  },

  // GET /api/user/:address
  async getUser(address: string): Promise<User | null> {
    return restEndpoints.getUser(address);
  },

  // GET /api/user/:address/positions
  async getUserPositions(address: string): Promise<Position[]> {
    return restEndpoints.getUserPositions(address);
  },

  // GET /api/user/:address/earnings
  async getUserEarnings(address: string, poolId?: string): Promise<EarningPoint[]> {
    return restEndpoints.getUserEarnings(address, poolId);
  },

  // POST /api/positions
  async createPosition(data: any): Promise<{ success: boolean; id: string }> {
    return restEndpoints.createPosition(data);
  },

  // GET /api/distributions
  async getDistributions(): Promise<Distribution[]> {
    return restEndpoints.getDistributions();
  },

  // GET /api/explore/transactions
  async getExploreTransactions(): Promise<ExplorerTx[]> {
    return restEndpoints.getExploreTransactions();
  },

  // Legacy endpoints for backward compatibility
  async createKycSession(address: string): Promise<{ sessionId: string; url: string }> {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(500);
    return {
      sessionId: 'kyc_' + Date.now(),
      url: 'https://verify.example.com/session'
    };
  },

  async handleKycCallback(data: any): Promise<{ success: boolean }> {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(300);
    return { success: true };
  }
};