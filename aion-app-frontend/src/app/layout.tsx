
import Layout from '@/components/layout/layout'


interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}