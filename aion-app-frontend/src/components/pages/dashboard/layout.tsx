'use client'

import { DashboardProvider } from "@/components/providers/dashboard";
import  Header  from "@/components/ui/header";
import { useAccountContext, useMountedContext } from "@/components/context/account";
import { formatLargeNumber, formatPercentage } from "@/shared/utils/format";
import { KPICardLg } from "@/components/shared/kpi/kpi-lg";
import { DollarSign, Radius, Target, TrendingUp } from "lucide-react";
import { useDashboard } from "@/hooks/use-dashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { RouteTransition } from "@/components/providers/motion";

export interface DashboardLayoutProps {
    children: React.ReactNode;
}

const tabs = [
    {
        label: "Overview",
        value: "overview"
    },
    
    {
        label: "Pool Details",
        value: "pool-details"
    },
    {
        label: "Performance",
        value: "performance"
    },
    {
        label: "Distributions",
        value: "distributions"
    },
    {
        label: "Settings",
        value: "settings"
    }
]

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    
    const { account } = useAccountContext(); 
    const { selectedTab, setSelectedTab } = useDashboard('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (selectedTab !== pathname.split('/').pop()) {
            router.push(`/dashboard/${selectedTab}`);
        } else {
            router.push(`/dashboard/${tabs[0].value}`);
        }
    }, [selectedTab]);
    
    return (

        <div className="container mx-auto px-4 space-y-8">
            {/* Header */}

         <div className="flex items-start justify-between">
            <Header 
            title={`Hello ${account?.user?.identity?.first_name || ''}`} 
            description="Track your receivables pool performance and manage your investments" />    
        </div>
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <KPICardLg
            textTitle="Total Invested"
            cardContent={formatLargeNumber(account?.total_invested || 0)}
            icon={DollarSign}
            iconColor="text-primary"
            iconBackgroundColor="bg-primary-10"
            />
            <KPICardLg
            textTitle="Total Earnings"
            cardContent={formatLargeNumber(account?.total_earnings || 0)}
            icon={TrendingUp}
            iconColor="text-tertiary"
            iconBackgroundColor="bg-tertiary-10"
            />
            <KPICardLg
            textTitle="Average APY"
            cardContent={formatPercentage(account?.metrics?.supply_apy_bps!/100 || 0)}
            icon={Target}
            iconColor="text-primary"
            iconBackgroundColor="bg-primary-10"
            />
            <KPICardLg
            textTitle="Contribution"
            cardContent={formatPercentage(account?.ownership_bps!/100 || 0)}
            icon={Radius}
            iconColor="text-secondary"
            iconBackgroundColor="bg-secondary-10"
            />
            
        </div>
        <DashboardProvider startTab={selectedTab}>
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 lg:w-[500px] px-1.5 rounded-3xl">
                {tabs.map((tab, index) => (
                    <TabsTrigger key={index} value={tab.value}>     
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            <TabsContent value={selectedTab}>
                <RouteTransition level="dashboard" variant="slide">
                    {children}
                </RouteTransition>
            </TabsContent>
        </Tabs>
        </DashboardProvider>
        </div>
    )
}
