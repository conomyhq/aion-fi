import { createContext, useContext } from "react"
import { useAccount } from "@/hooks/use-account"
import { useIsMounted } from "@/hooks/use-is-mounted";
import { Wallet } from "@/domain/entities/user";

interface AccountContextType {
  account: ReturnType<typeof useAccount>['account'];
  updateAccount: (account: Wallet) => void;
  connectWallet: () => void;
  getStatusLabel: () => string;
}
interface MountedContextType {
  mounted: boolean;
  setMounted: (mounted: boolean) => void;
}

const AccountContext = createContext<AccountContextType | null>(null);
const MountedContext = createContext<MountedContextType | null>(null);

export function useAccountContext() {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error('useAccountContext must be used within Providers');
  }
  return context;
}

export function useMountedContext() {
  const context = useContext(MountedContext);
  if (!context) {
    throw new Error('useMountedContext must be used within Providers');
  }
  return context;
}

export { AccountContext };
export type { AccountContextType };export type { MountedContextType };
export { MountedContext };
