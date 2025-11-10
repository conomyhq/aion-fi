import { ExplorerTx } from '../../domain/entities/explorerTx';

export class InMemoryExplorerRepository {
  private transactions: ExplorerTx[] = [];

  constructor() {
    this.seedData();
  }

  async findAll(): Promise<ExplorerTx[]> {
    return [...this.transactions].sort((a, b) => b.block_time.getTime() - a.block_time.getTime());
  }

  async findByPoolId(poolId: string): Promise<ExplorerTx[]> {
    return this.transactions
      .filter(tx => tx.pool_id === poolId)
      .sort((a, b) => b.block_time.getTime() - a.block_time.getTime());
  }

  async findByType(type: ExplorerTx['type']): Promise<ExplorerTx[]> {
    return this.transactions
      .filter(tx => tx.type === type)
      .sort((a, b) => b.block_time.getTime() - a.block_time.getTime());
  }

  async create(transaction: ExplorerTx): Promise<ExplorerTx> {
    this.transactions.push(transaction);
    return transaction;
  }

  private seedData(): void {
    const now = new Date();
    
    // 6 explorer transactions with different types
    const transactions: ExplorerTx[] = [
      {
        tx_hash: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890',
        block_time: new Date(now.getTime() - 2 * 60 * 60 * 1000), // 2 hours ago
        type: 'deposit',
        pool_id: '1',
        from: '0x1234567890123456789012345678901234567890',
        to: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        amount_usdc: 10000,
        status: 'success'
      },
      {
        tx_hash: '0x2b3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890ab',
        block_time: new Date(now.getTime() - 4 * 60 * 60 * 1000), // 4 hours ago
        type: 'advance',
        pool_id: '2',
        from: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        to: '0x9876543210987654321098765432109876543210',
        amount_usdc: 150000,
        status: 'success'
      },
      {
        tx_hash: '0x3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890abcd',
        block_time: new Date(now.getTime() - 6 * 60 * 60 * 1000), // 6 hours ago
        type: 'settle',
        pool_id: '2',
        from: '0x9876543210987654321098765432109876543210',
        to: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        amount_usdc: 152250,
        status: 'success'
      },
      {
        tx_hash: '0x4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
        block_time: new Date(now.getTime() - 8 * 60 * 60 * 1000), // 8 hours ago
        type: 'withdraw',
        pool_id: '1',
        from: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        to: '0x5555666677778888999900001111222233334444',
        amount_usdc: 5000,
        status: 'success'
      },
      {
        tx_hash: '0x5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef12',
        block_time: new Date(now.getTime() - 12 * 60 * 60 * 1000), // 12 hours ago
        type: 'deposit',
        pool_id: '3',
        from: '0x5555666677778888999900001111222233334444',
        to: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        amount_usdc: 25000,
        status: 'failed'
      },
      {
        tx_hash: '0x6f7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234',
        block_time: new Date(now.getTime() - 18 * 60 * 60 * 1000), // 18 hours ago
        type: 'advance',
        pool_id: '4',
        from: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        to: '0xfedcbafedcbafedcbafedcbafedcbafedcbafedcba',
        amount_usdc: 75000,
        status: 'success'
      }
    ];

    this.transactions = transactions;
  }
}