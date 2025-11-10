import { User, Position, EarningPoint } from '../entities/user';

export interface UserService {
  getUserByAddress(address: string): Promise<User | null>;
  getUserPositions(address: string): Promise<Position[]>;
  getUserEarnings(address: string, poolId?: string): Promise<EarningPoint[]>;
  createUser(user: User): Promise<User>;
  updateUser(address: string, updates: Partial<User>): Promise<User>;
  verifyUser(address: string): Promise<User>;
}