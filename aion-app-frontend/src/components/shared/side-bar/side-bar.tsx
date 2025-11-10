import { Card, CardContent } from "@/components/ui/card";
import { Shield, User, Wallet, LucideIcon } from "lucide-react";



export interface SideBarProps {
  selectedSettingsTab: string;
  onClick: (tab: string) => void;
  tabs: {
    label: string;
    value: string;
    icon: LucideIcon;
    iconClassName: string;
  }[];
}

//bg-[#f0f0f0]
export default function SideBar({ selectedSettingsTab, onClick, tabs }: SideBarProps) {
    return (
    <Card className="shadow-none bg-[#f0f0f0] p-2 rounded-md border-[#f1f1f1]">
        <CardContent>
          <nav className="space-y-2">
            {tabs.map((tab, index) => (
              <button value={tab.value} 
              key={index}
               onClick={() => onClick(tab.value)} 
               className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-sm ${selectedSettingsTab === tab.value ? 'bg-panel text-text shadow-xs' : ''}`}>
              <tab.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
            ))} 
          </nav>
        </CardContent>
      </Card>
  )
}