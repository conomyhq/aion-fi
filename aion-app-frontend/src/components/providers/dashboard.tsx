import { ReactNode } from "react";
import { useDashboard } from "@/hooks/use-dashboard";
import { DashboardContext, DashboardContextType } from "../context/dashboard";


interface DashboardProviderProps {
    children: ReactNode;
    startTab: string;
}

export function DashboardProvider({ children, startTab }: DashboardProviderProps) {
    const { selectedTab, setSelectedTab } = useDashboard(startTab);
    const value: DashboardContextType = {
        selectedTab,
        setSelectedTab
    };
    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    )
}