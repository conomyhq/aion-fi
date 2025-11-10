import { Pool, PoolHistoryPoint } from '../../domain/entities/pool';

export class InMemoryPoolRepository {
  private pools: Pool[] = [];
  private history: PoolHistoryPoint[] = [];

  constructor() {
    this.seedData();
  }

  // Pool operations
  async findAll(): Promise<Pool[]> {
    return [...this.pools];
  }

  async findById(id: string): Promise<Pool | null> {
    return this.pools.find(pool => pool.id === id) || null;
  }

  async create(pool: Pool): Promise<Pool> {
    this.pools.push(pool);
    return pool;
  }

  async update(id: string, updates: Partial<Pool>): Promise<Pool | null> {
    const index = this.pools.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    this.pools[index] = { ...this.pools[index], ...updates };
    return this.pools[index];
  }

  // Pool history operations
  async findHistoryByPoolId(poolId: string): Promise<PoolHistoryPoint[]> {
    return this.history.filter(h => h.pool_id === poolId).sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  async addHistoryPoint(point: PoolHistoryPoint): Promise<PoolHistoryPoint> {
    this.history.push(point);
    return point;
  }

  private seedData(): void {
    // Seed 4 pools with different lock periods
    const pools: Pool[] = [
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
      {
        id: '3',
        name: 'Growth Pool',
        lock_days: 21,
        target_apy_bps: 1520,
        tvl_usdc: 5700000,
        occupancy_pct: 78,
        default_rate_pct: 4.2,
        description: 'Higher yield pool with 21-day lock period'
      },
      {
        id: '4',
        name: 'Premium Pool',
        lock_days: 30,
        target_apy_bps: 1850,
        tvl_usdc: 3200000,
        occupancy_pct: 65,
        default_rate_pct: 5.8,
        description: 'Premium pool with 30-day lock period for maximum returns'
      }
    ];

    this.pools = pools;

    // Generate 12 months of history for each pool
    const now = new Date();
    pools.forEach(pool => {
      for (let i = 0; i < 12; i++) {
        const date = new Date(now);
        date.setMonth(date.getMonth() - i);
        
        // Simulate realistic data with some variance
        const baseNav = pool.tvl_usdc * (0.95 + Math.random() * 0.1);
        const realizedApy = pool.target_apy_bps * (0.8 + Math.random() * 0.4);
        const defaultRate = pool.default_rate_pct * (0.5 + Math.random() * 1.0);

        this.history.push({
          pool_id: pool.id,
          date,
          nav_usdc: Math.round(baseNav),
          realized_apy_bps: Math.round(realizedApy),
          default_rate_pct: Math.round(defaultRate * 100) / 100
        });
      }
    });
  }
}