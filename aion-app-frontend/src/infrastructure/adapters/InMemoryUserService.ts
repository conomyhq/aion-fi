import { User, Position, EarningPoint } from '../../domain/entities/user';
import { UserService } from '../../domain/services/UserService';

export class InMemoryUserService implements UserService {
  private users: User[] = [];
  private positions: Position[] = [];

  async getUserByAddress(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async getUserPositions(id: string): Promise<Position[]> {
    return this.positions.filter(position => position.id === id);
  }

  async getUserEarnings(id: string, poolId?: string): Promise<EarningPoint[]> {
    const userPositions = poolId 
      ? this.positions.filter(pos => pos.id === id && pos.pool_id === poolId)
      : this.positions.filter(pos => pos.id === id);

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

  async createUser(userData: User): Promise<User> {
    this.users.push(userData);
    return userData;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex === -1) throw new Error('User not found');
    
    this.users[userIndex] = { ...this.users[userIndex], ...updates };
    return this.users[userIndex];
  }

  async verifyUser(address: string): Promise<User> {
    return this.updateUser(address, { kyc_status: 'verified' });
  }
}