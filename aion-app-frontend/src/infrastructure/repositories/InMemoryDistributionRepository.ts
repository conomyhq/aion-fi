import { Distribution } from '../../domain/entities/distribution';

export class InMemoryDistributionRepository {
  private distributions: Distribution[] = [];

  constructor() {
    this.seedData();
  }

  async findAll(): Promise<Distribution[]> {
    return [...this.distributions].sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  async findByPoolId(poolId: string): Promise<Distribution[]> {
    return this.distributions
      .filter(d => d.pool_id === poolId)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  async create(distribution: Distribution): Promise<Distribution> {
    this.distributions.push(distribution);
    return distribution;
  }

  private seedData(): void {
    const now = new Date();
    
    // 6 distributions over the last 3-6 months
    const distributions: Distribution[] = [
      {
        id: 'dist_1',
        date: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000), // 1 month ago
        pool_id: '1',
        gross_fees_usdc: 125000,
        protocol_fee_usdc: 12500,
        net_distributed_usdc: 112500,
        net_yield_bps: 90
      },
      {
        id: 'dist_2',
        date: new Date(now.getTime() - 45 * 24 * 60 * 60 * 1000), // 1.5 months ago
        pool_id: '2',
        gross_fees_usdc: 83200,
        protocol_fee_usdc: 8320,
        net_distributed_usdc: 74880,
        net_yield_bps: 102
      },
      {
        id: 'dist_3',
        date: new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000), // 2 months ago
        pool_id: '1',
        gross_fees_usdc: 118000,
        protocol_fee_usdc: 11800,
        net_distributed_usdc: 106200,
        net_yield_bps: 85
      },
      {
        id: 'dist_4',
        date: new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000), // 3 months ago
        pool_id: '3',
        gross_fees_usdc: 95600,
        protocol_fee_usdc: 9560,
        net_distributed_usdc: 86040,
        net_yield_bps: 151
      },
      {
        id: 'dist_5',
        date: new Date(now.getTime() - 120 * 24 * 60 * 60 * 1000), // 4 months ago
        pool_id: '2',
        gross_fees_usdc: 76500,
        protocol_fee_usdc: 7650,
        net_distributed_usdc: 68850,
        net_yield_bps: 95
      },
      {
        id: 'dist_6',
        date: new Date(now.getTime() - 150 * 24 * 60 * 60 * 1000), // 5 months ago
        pool_id: '4',
        gross_fees_usdc: 58300,
        protocol_fee_usdc: 5830,
        net_distributed_usdc: 52470,
        net_yield_bps: 164
      }
    ];

    this.distributions = distributions;
  }
}