'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Wallet, Menu, X, DoorOpen, Plus  } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { setAllowed, isConnected, isAllowed } from '@stellar/freighter-api'
import Image from 'next/image';
import { useAccountContext, useMountedContext } from '../context/account';
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { InvestmentCard } from '../shared/investment-card/investment-card';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useVaultContext } from '../context/vault';

const navigationItems = [
  { name: 'Pool', href: '/pools' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Distributions', href: '/distributions' },
  { name: 'Explore', href: '/explore' },
];

export function Navbar() {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { account, connectWallet, updateAccount, getStatusLabel } = useAccountContext();
  const { mounted, setMounted } = useMountedContext(); 
  const [openInvestDialog, setOpenInvestDialog] = React.useState(false);
  const router = useRouter(); 
  const onClickConnectWallet = () => {
    setMounted(true);
  }

useEffect(() => {
  if (!mounted) {
    return;
  }
    void connectWallet();
}, [mounted, connectWallet]);

  useEffect(() => {
    if (account && mounted && account.address === '') {
       updateAccount(account);
    }
    if (account && mounted && account.address !== '') {
      setAllowed();
    }
  }, [account, updateAccount]);


  const { vault } = useVaultContext();
 
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full">
        <div className="px-4 py-4 md:px-6 bg-[var(--panel)] lg:px-8 mx-8 my-4 border border-[var(--stroke)]  rounded-lg" >
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/pools" className="flex items-center">
              <Image src="/logo/aion-fi-logo.svg" alt="Aion" width={32} height={32} className="h-8 w-auto" />
            </Link>
            {/* Right side - Desktop */}
            <div className="hidden md:flex items-center gap-4">

              {!mounted &&  account && account.address === ''  ? (
                <Button className="btn-primary" onClick={onClickConnectWallet}>
                  <Wallet className="mr-2 h-4 w-4"/>
                  Connect Wallet
                </Button>
              ) : (
                <>
                
                  { (account && account.user.kyc_status === 'verified')  && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-tertiary-10 rounded-lg border border-tertiary-10">
                    <div className="h-2 w-2 bg-[var(--success)] rounded-full animate-pulse"></div>
                    <span className="text-small text-[var(--success)] font-medium">
                      {getStatusLabel()}
                    </span>
                  </div>
                   )}

                { (account && account.user.kyc_status === 'unverified')  && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-quaternary-10 rounded-lg border border-quaternary-10">
                    <div className="h-2 w-2 bg-[var(--error)] rounded-full animate-pulse"></div>
                    <span className="text-small text-[var(--quaternary)] font-medium">
                      {getStatusLabel()}
                    </span>
                  </div>
                   )}

                { (account && account.user.kyc_status === 'pending')  && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-quinary-10 rounded-lg border border-quinary-10">
                    <div className="h-2 w-2 bg-[var(--warning)] rounded-full animate-pulse"></div>
                    <span className="text-small text-[var(--quinary)] font-medium">
                      {getStatusLabel()}
                    </span>
                  </div>
                   )}

                { (account && account.user.kyc_status === 'rejected')  && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-quaternary-10 rounded-lg border border-quaternary-10">
                    <div className="h-2 w-2 bg-[var(--error)] rounded-full animate-pulse"></div>
                    <span className="text-small text-[var(--quaternary)] font-medium">
                      {getStatusLabel()}
                    </span>
                  </div>
                   )}

                  { (account && account.display_name !== '') && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-[var(--panel)] rounded-lg border border-[var(--stroke)]">
                    <div className="h-2 w-2 bg-[var(--success)] rounded-full animate-pulse"></div>
                    <span className="text-small font-mono text-[var(--muted)]">
                      {account.display_name}
                    </span>
                  </div>
                   )}

                  {(mounted && pathname === '/pools' && account && account.user.kyc_status === 'verified') && (
                  <Button variant={"default"} onClick={() => {
                    console.log('Dashboard-Click');
                      router.push('/dashboard');
                  }}>
                    <DoorOpen className="mr-2 h-4 w-4" />
                    Dashboard
        
                  </Button>
                  )}
                  {(mounted && pathname.includes('/dashboard') && account && account.user.kyc_status === 'verified') && (
                  <AlertDialog open={openInvestDialog} onOpenChange={setOpenInvestDialog}>
                  <AlertDialogTrigger asChild>
                    <Button className="btn-primary" onClick={() => setOpenInvestDialog(true)}>
                      <Plus  className="h-4 w-4"/>
                      Add Investment
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="p-0">
                    <VisuallyHidden>
                    <AlertDialogTitle>Invest</AlertDialogTitle>
                    </VisuallyHidden>
                    <InvestmentCard 
                    vault={vault} 
                    account={account} 
                    updateAccount={updateAccount} 
                    onClose={() => setOpenInvestDialog(false)}
                    />
                  </AlertDialogContent>
                </AlertDialog>
                  )}
                  

                  
                 

                  {/* User Menu */}
                  {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 rounded-full p-0 focus-visible:ring-2 focus-visible:ring-ring">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-[var(--text)] text-[var(--panel)] font-medium">
                            U
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-[var(--panel)] border-[var(--stroke)]" align="end">
                      <DropdownMenuItem asChild>
                        <Link href="/profile" className="flex items-center text-[var(--text)] focus-visible:ring-2 focus-visible:ring-ring">
                          <User className="mr-2 h-4 w-4" />
                          Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/settings" className="flex items-center text-[var(--text)] focus-visible:ring-2 focus-visible:ring-ring">
                          <Settings className="mr-2 h-4 w-4" />
                          Settings
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-[var(--stroke)]" />
                      <DropdownMenuItem className="text-[var(--error)] focus:text-[var(--error)] focus-visible:ring-2 focus-visible:ring-ring">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu> */}
                </>
              )}
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center gap-4">
              {!mounted || !account && (
                <Button size="sm" className="btn-primary">
                  <Wallet className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[var(--panel)] border-b border-[var(--stroke)]">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block font-medium tracking-tight text-[var(--text)] transition-colors hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1 ${
                      isActive
                        ? 'underline underline-offset-4 decoration-[var(--accent)]'
                        : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              {mounted && account && (
                <>
                  <div className="pt-4 border-t border-[var(--stroke)] space-y-2">
                    <Link
                      href="/profile"
                      onClick={closeMobileMenu}
                      className="block font-medium tracking-tight text-[var(--text)] transition-colors hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      onClick={closeMobileMenu}
                      className="block font-medium tracking-tight text-[var(--text)] transition-colors hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
                    >
                      Settings
                    </Link>
                    
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}