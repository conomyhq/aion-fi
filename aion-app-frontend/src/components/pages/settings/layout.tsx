'use client'

import { Shield, Wallet, User } from "lucide-react";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import SideBar from "@/components/shared/side-bar/side-bar";
import { RouteTransition } from "@/components/providers/motion";

export interface SettingsLayoutProps {
  children: React.ReactNode;
}

const tabs = [
  {
    label: 'KYC Status',
    value: 'kyc-status',
    icon: Shield,
    iconClassName: 'text-secondary',
  },
  
  {
    label: 'Account info',
    value: 'wallet',
    icon: Wallet,
    iconClassName: 'text-primary',
  },
  {
    label: 'Personal info',
    value: 'account',
    icon: User,
    iconClassName: 'text-tertiary',
  },
]

export default function SettingsLayout( { children }: SettingsLayoutProps ) {
  const [selectedSettingsTab, setSelectedSettingsTab] = React.useState<string>(tabs[0].value);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (selectedSettingsTab !== pathname.split('/').pop()) {
      router.push(`/dashboard/settings/${selectedSettingsTab}`);
    }
  }, [selectedSettingsTab]);

    return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
    {/* Settings Navigation */}
    <div className="space-y-2 col-span-1">
      <SideBar 
      selectedSettingsTab={selectedSettingsTab} 
      onClick={setSelectedSettingsTab} 
      tabs={tabs} />
      
      </div>
      <RouteTransition disableInitialExit={true} level="settings" variant="slide" className="col-span-3 lg:col-span-3">
          {children}
      </RouteTransition>
    </div>
  );
};