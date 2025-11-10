import { User, Position, EarningPoint } from '../domain/entities/user';
import { UserService } from '../domain/services/UserService';

export class GetUserDataUseCase {
  constructor(private userService: UserService) {}

  async getUserProfile(address: string): Promise<User | null> {
    return this.userService.getUserByAddress(address);
  }

  async getUserPositions(address: string): Promise<Position[]> {
    return this.userService.getUserPositions(address);
  }

  async getUserEarnings(address: string, poolId?: string): Promise<EarningPoint[]> {
    return this.userService.getUserEarnings(address, poolId);
  }
}