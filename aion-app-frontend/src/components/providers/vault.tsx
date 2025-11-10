import { useVault } from "@/hooks/use-vault";
import { VaultContext, VaultContextType } from "../context/vault";
import { vaultData } from "@/data/vault";

interface VaultProviderProps {
  children: React.ReactNode;
}

export function VaultProvider({ children }: VaultProviderProps) {
  const { vault } = useVault(vaultData);
  const value: VaultContextType = {
    vault
  };
  return (<VaultContext.Provider value={value}>
    {children}
    </VaultContext.Provider>);
}