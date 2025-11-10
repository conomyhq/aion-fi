import { Pool } from '../domain/entities/pool';
import { PoolService } from '../domain/services/PoolService';

export class GetPoolsUseCase {
  constructor(private poolService: PoolService) {}

  async execute(): Promise<Pool[]> {
    return this.poolService.getAllPools();
  }
}