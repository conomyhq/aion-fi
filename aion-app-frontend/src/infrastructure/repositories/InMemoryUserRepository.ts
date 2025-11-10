import { User, Position, EarningPoint } from '../../domain/entities/user';

export class InMemoryUserRepository {
  private users: User[] = [];
  private positions: Position[] = [];

  constructor() {
    this.seedData();
  }

  // User operations
  async findByAddress(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async update(id: string, updates: Partial<User>): Promise<User | null> {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return null;
    
    this.users[index] = { ...this.users[index], ...updates };
    return this.users[index];
  }

  // Position operations
  async findPositionsByUserAddress(address: string): Promise<Position[]> {
    return this.positions.filter(pos => pos.user_address === address);
  }

  async createPosition(position: Position): Promise<Position> {
    this.positions.push(position);
    return position;
  }

  async findPositionById(id: string): Promise<Position | null> {
    return this.positions.find(pos => pos.id === id) || null;
  }

  async updatePosition(id: string, updates: Partial<Position>): Promise<Position | null> {
    const index = this.positions.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    this.positions[index] = { ...this.positions[index], ...updates };
    return this.positions[index];
  }

  // Earnings calculation
  async calculateEarnings(address: string, poolId?: string): Promise<EarningPoint[]> {
    const userPositions = poolId 
      ? this.positions.filter(pos => pos.user_address === address && pos.pool_id === poolId)
      : this.positions.filter(pos => pos.user_address === address);

    if (userPositions.length === 0) return [];

    // Generate earning points for the last 30 days
    const earningPoints: EarningPoint[] = [];
    const now = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      
      const totalPrincipal = userPositions.reduce((sum, pos) => sum + pos.amount_usdc, 0);
      const dailyAccrual = totalPrincipal * 0.0002; // ~7.3% APY daily accrual
      const totalAccrued = dailyAccrual * (30 - i);
      
      earningPoints.push({
        date,
        principal_usdc: totalPrincipal,
        accrued_net_usdc: Math.round(totalAccrued * 100) / 100
      });
    }

    return earningPoints.reverse(); // Oldest to newest
  }

  private seedData(): void {
    // Demo user
    const demoUser: User = {
      id: 'user_1',
      kyc_status: 'verified',
      email: 'demo@aion.fi',
      is_verified: true,
      joined_at: new Date(),
      last_active: new Date(),
      total_invested: 10000,
      total_earnings: 1000,
      active_positions: 1,
      completed_transactions: 1
    };

    this.users.push(demoUser);

    // 2 positions for demo user
    const now = new Date();
    const position1: Position = {
      id: 'pos_1',
      user_address: demoUser.id,
      pool_id: '1',
      amount_usdc: 10000,
      shares: 9850,
      deposit_at: new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
      lock_until: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      status: 'active',
      ref_id: 'ref_001'
    };

    const position2: Position = {
      id: 'pos_2',
      user_address: demoUser.id,
      pool_id: '2',
      amount_usdc: 25000,
      shares: 24500,
      deposit_at: new Date(now.getTime() - 28 * 24 * 60 * 60 * 1000), // 28 days ago
      lock_until: new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
      status: 'active'
    };

    this.positions.push(position1, position2);
  }
}