import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { Providers } from './providers'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { RouteTransition } from '@/components/providers/motion'
import { LoadingProvider } from '../providers/loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aion App',
  description: 'Aion Finance Application',
}

interface LayoutProps {
  children: React.ReactNode
}


export default function Layout({children}: LayoutProps) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="absolute inset-0 z-0 top-24">
      <div className="relative overflow-hidden h-20">
            <div className="absolute top-2 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-300 opacity-50 blur-sm"></div>
            <div className="absolute top-6 right-12 w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 opacity-40 blur-sm"></div>
            <div className="absolute top-1 left-1/3 w-6 h-6 rounded-full bg-gradient-to-br from-violet-200 to-violet-300 opacity-35 blur-sm"></div>
          </div>
      </div>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-[64px] relative z-10 pb-[64px]">
                {children}
            </main> 
            <Footer />
          </div>
      </Providers>
    </body>
  </html>
  );
}
