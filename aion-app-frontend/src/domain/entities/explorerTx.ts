export interface ExplorerTx {
  tx_hash: string;
  block_time: Date;
  type: 'deposit' | 'advance' | 'settle' | 'withdraw';
  pool_id: string;
  from: string;
  to: string;
  amount_usdc: number;
  status: 'success' | 'failed';
}