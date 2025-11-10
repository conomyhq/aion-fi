import { useAccount } from "@/hooks/use-account";
import { AccountContext, AccountContextType, MountedContext, MountedContextType } from "../context/account";
import { ReactNode } from "react";
import { useIsMounted } from "@/hooks/use-is-mounted";



interface AccountProviderProps {
    children: ReactNode;
  }

  interface MountedProviderProps {
    children: ReactNode;
  }

  export function AccountProvider({ children }: AccountProviderProps) {
    const { account, updateAccount, connectWallet, getStatusLabel } = useAccount();  
    const value: AccountContextType = {
      account,
      updateAccount,
      connectWallet,
      getStatusLabel

    };
  
    return (
      <AccountContext.Provider value={value}>
        {children}
      </AccountContext.Provider>
    );
}

export function MountedProvider({ children }: MountedProviderProps) {
  const {mounted, setMounted} = useIsMounted();
  const value: MountedContextType = {
    mounted,
    setMounted,
  };
  return (
    <MountedContext.Provider value={value}>
      {children}
      </MountedContext.Provider>
  );
}