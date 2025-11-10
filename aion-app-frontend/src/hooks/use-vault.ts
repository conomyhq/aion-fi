import { Vault } from "@/domain/entities/pool";
import { useState } from "react";


export function useVault(vaultData: Vault) {
  const [vault, setVault] = useState<Vault>(vaultData);
  return { vault, setVault };
}