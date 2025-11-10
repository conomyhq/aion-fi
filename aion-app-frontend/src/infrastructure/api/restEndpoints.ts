import { Pool, PoolHistoryPoint } from '../../domain/entities/pool';
import { User, Position, EarningPoint } from '../../domain/entities/user';
import { Distribution } from '../../domain/entities/distribution';
import { ExplorerTx } from '../../domain/entities/explorerTx';
import { CreatePositionSchema } from '../../shared/schemas';

import { InMemoryPoolRepository } from '../repositories/InMemoryPoolRepository';
import { InMemoryUserRepository } from '../repositories/InMemoryUserRepository';
import { InMemoryDistributionRepository } from '../repositories/InMemoryDistributionRepository';
import { InMemoryExplorerRepository } from '../repositories/InMemoryExplorerRepository';

// Initialize repositories
const poolRepo = new InMemoryPoolRepository();
const userRepo = new InMemoryUserRepository();
const distributionRepo = new InMemoryDistributionRepository();
const explorerRepo = new InMemoryExplorerRepository();

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const restEndpoints = {
  // GET /api/pools
  async getPools(): Promise<Pool[]> {
    await delay(200);
    return poolRepo.findAll();
  },

  // GET /api/pools/:id/history
  async getPoolHistory(id: string): Promise<PoolHistoryPoint[]> {
    await delay(150);
    return poolRepo.findHistoryByPoolId(id);
  },

  // GET /api/user/:address
  async getUser(address: string): Promise<User | null> {
    await delay(100);
    return userRepo.findByAddress(address);
  },

  // GET /api/user/:address/positions
  async getUserPositions(address: string): Promise<Position[]> {
    await delay(150);
    return userRepo.findPositionsByUserAddress(address);
  },

  // GET /api/user/:address/earnings?pool_id=<id>
  async getUserEarnings(address: string, poolId?: string): Promise<EarningPoint[]> {
    await delay(200);
    return userRepo.calculateEarnings(address, poolId);
  },

  // POST /api/positions
  async createPosition(data: unknown): Promise<{ success: boolean; id: string }> {
    await delay(300);
    
    try {
      const validatedData = CreatePositionSchema.parse(data);
      
      // Generate position
      const position: Position = {
        id: `pos_${Date.now()}`,
        user_address: validatedData.user_address,
        pool_id: validatedData.pool_id,
        amount_usdc: validatedData.amount_usdc,
        shares: Math.floor(validatedData.amount_usdc * 0.98), // 2% fee simulation
        deposit_at: new Date(),
        lock_until: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        status: 'active',
        ref_id: validatedData.ref_id
      };

      await userRepo.createPosition(position);
      
      return { success: true, id: position.id };
    } catch (error) {
      throw new Error('Invalid position data');
    }
  },

  // GET /api/distributions
  async getDistributions(): Promise<Distribution[]> {
    await delay(200);
    return distributionRepo.findAll();
  },

  // GET /api/explore/transactions
  async getExploreTransactions(): Promise<ExplorerTx[]> {
    await delay(180);
    return explorerRepo.findAll();
  }
};