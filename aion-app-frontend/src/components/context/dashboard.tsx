import { useDashboard } from "@/hooks/use-dashboard";
import { createContext, useContext } from "react";

interface DashboardContextType {
    selectedTab: ReturnType<typeof useDashboard>['selectedTab'];
    setSelectedTab: ReturnType<typeof useDashboard>['setSelectedTab'];
}

const DashboardContext = createContext<DashboardContextType | null>(null);

export function useDashboardContext() {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error('useDashboardContext must be used within a DashboardProvider');
    }
    return context;
}

export { DashboardContext };
export type { DashboardContextType };