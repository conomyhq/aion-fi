import { Pool, PoolHistoryPoint } from '../entities/pool';

export interface PoolService {
  getAllPools(): Promise<Pool[]>;
  getPoolById(id: string): Promise<Pool | null>;
  getPoolHistory(id: string): Promise<PoolHistoryPoint[]>;
  createPool(pool: Omit<Pool, 'id'>): Promise<Pool>;
  updatePool(id: string, updates: Partial<Pool>): Promise<Pool>;
  deactivatePool(id: string): Promise<void>;
}