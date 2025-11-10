import { useVault } from "@/hooks/use-vault";
import { createContext, useContext } from "react";
import { vaultData } from "@/data/vault";

interface VaultContextType {
  vault: ReturnType<typeof useVault>['vault'];
}

const VaultContext = createContext<VaultContextType>({ vault: vaultData });

export function useVaultContext() {
  const context = useContext(VaultContext);
  if (!context) {
    throw new Error('useVaultContext must be used within a VaultProvider');
  }
  return context;
}

export { VaultContext };
export type { VaultContextType };