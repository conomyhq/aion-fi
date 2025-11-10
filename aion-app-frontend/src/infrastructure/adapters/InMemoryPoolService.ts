import { Pool, PoolHistoryPoint } from '../../domain/entities/pool';
import { PoolService } from '../../domain/services/PoolService';

export class InMemoryPoolService implements PoolService {
  private pools: Pool[] = [
    {
      id: '1',
      name: 'Short Term Pool',
      lock_days: 7,
      target_apy_bps: 850,
      tvl_usdc: 12500000,
      occupancy_pct: 85,
      default_rate_pct: 2.1,
      description: 'Conservative pool with 7-day lock period'
    },
    {
      id: '2',
      name: 'Medium Term Pool', 
      lock_days: 14,
      target_apy_bps: 1200,
      tvl_usdc: 8300000,
      occupancy_pct: 92,
      default_rate_pct: 3.5,
      description: 'Balanced pool with 14-day lock period'
    },
  ];

  private history: PoolHistoryPoint[] = [];

  async getAllPools(): Promise<Pool[]> {
    return [...this.pools];
  }

  async getPoolById(id: string): Promise<Pool | null> {
    return this.pools.find(pool => pool.id === id) || null;
  }

  async getPoolHistory(id: string): Promise<PoolHistoryPoint[]> {
    return this.history.filter(h => h.pool_id === id);
  }

  async createPool(poolData: Omit<Pool, 'id'>): Promise<Pool> {
    const pool: Pool = {
      ...poolData,
      id: (this.pools.length + 1).toString(),
    };
    this.pools.push(pool);
    return pool;
  }

  async updatePool(id: string, updates: Partial<Pool>): Promise<Pool> {
    const poolIndex = this.pools.findIndex(p => p.id === id);
    if (poolIndex === -1) throw new Error('Pool not found');
    
    this.pools[poolIndex] = { ...this.pools[poolIndex], ...updates };
    return this.pools[poolIndex];
  }

  async deactivatePool(id: string): Promise<void> {
    const poolIndex = this.pools.findIndex(p => p.id === id);
    if (poolIndex === -1) throw new Error('Pool not found');
    // Note: New Pool interface doesn't have isActive field
    // This would need to be implemented differently or removed
  }
}