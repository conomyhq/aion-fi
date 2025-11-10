import SettingsLayout from "@/components/pages/settings/layout";


function Settings({ children }: { children: React.ReactNode }) {
    return (
        <SettingsLayout>
            {children}
        </SettingsLayout>
    )
}

export default Settings;