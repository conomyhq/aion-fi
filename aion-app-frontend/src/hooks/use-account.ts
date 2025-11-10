import { useCallback, useEffect, useState } from "react";
import { isConnected, requestAccess } from "@stellar/freighter-api";
import { KycStatus, Wallet } from "@/domain/entities/user";

const addressToHistoricObject = (address: string, account: Wallet | null) => {

  if (account && account.address === address) {
    return account;
  }

  const addressObject: Wallet = {
    address: address,
    display_name: `${address.slice(0, 4)}...${address.slice(-4)}`,
    user: {
      kyc_status: 'unverified',
      joined_at: new Date(),
      last_activity: new Date(),
    },
  }
  
  return addressObject
};

const baseWallet: Wallet = {
  address: '',
  display_name: '',
  user: {
    kyc_status: 'unverified',
    joined_at: new Date(),
    last_activity: new Date(),
  }
}

export function useAccount() {
  const [account, setAccount] = useState<Wallet | null>(baseWallet);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState<string | undefined>(undefined);

const connectWallet = useCallback(async () => {
  console.log('connectWallet');
    setLoading(true);
    const isAppConnected = await isConnected()
    console.log('isAppConnected', account);

    if (!isAppConnected.isConnected) {
      setLoading(false);
      return null;
    }

    try {
    if (isAppConnected.isConnected) {
      const user = await requestAccess()
      if (user && user.address) {
        setAddress(user.address)
        setAccount(addressToHistoricObject(user.address, account));
        return null;
      }
    }

  } finally  {
    setLoading(false);
  }
  return null;
  }
  
  
  , []);

  // Function to update the account
  const updateAccount = useCallback((newAccount: Wallet) => {
    setAccount(newAccount);
  }, []);

  // Function to set the KYC status
  const setKycStatus = useCallback((newKycStatus: KycStatus) => {
    if (account) {
      account.user.kyc_status = newKycStatus;
    }
  }, [account]);

  // Function to get the status as a readable string
  const getStatusLabel = useCallback(() => {
    const labels = {
      verified: 'verified',
      pending: 'pending',
      unverified: 'unverified',
      rejected: 'rejected',
    };
    return labels[account?.user?.kyc_status || 'unverified'];
  }, [account]);


  return {
    loading,
    account,
    connectWallet,
    updateAccount,
    setKycStatus,
    getStatusLabel,
  };


}
