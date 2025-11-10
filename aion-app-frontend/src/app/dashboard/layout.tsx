import DashboardLayout from "@/components/pages/dashboard/layout";

function Dashboard({ children }: { children: React.ReactNode }) {
    return (
    <DashboardLayout>
        {children}
    </DashboardLayout>
    )
}

export default Dashboard;