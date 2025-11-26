"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Briefcase, Menu, LogOut, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/shared/logo';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { href: '/jobs', label: 'مشاغل' },
  { href: '/recommendations', label: 'توصیه‌ها' },
  { href: '/blog', label: 'وبلاگ' },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isSheetOpen, setSheetOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    // This function must be defined inside useEffect to have access to window
    const handleAuthChange = () => {
      if (typeof window !== 'undefined') {
        const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
        const email = localStorage.getItem('userEmail');
        setIsLoggedIn(loggedInStatus);
        setUserEmail(email);
      }
    };

    // Run on initial mount
    handleAuthChange();
    
    // Listen for storage changes to sync across tabs
    window.addEventListener('storage', handleAuthChange);

    // Also listen for a custom event that we can dispatch on login/logout
    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  const isAdmin = userEmail?.toLowerCase() === 'admin1234@gmail.com';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    // We can't just set state here, we need to trigger the event
    // to ensure all components (including this one) re-read from localStorage
    window.dispatchEvent(new Event('authChange')); 
    router.push('/');
  };

  const closeSheetAndLogout = () => {
    setSheetOpen(false);
    handleLogout();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === link.href ? 'text-foreground font-semibold' : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          {isLoggedIn ? (
            <>
              {isAdmin && (
                <Button variant="outline" asChild>
                  <Link href="/dashboard">
                    <LayoutDashboard className="ms-2 h-4 w-4" />
                    داشبورد
                  </Link>
                </Button>
              )}
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="ms-2 h-4 w-4" />
                خارج شوید
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">ورود</Link>
              </Button>
              <Button asChild className='bg-accent text-accent-foreground hover:bg-accent/90'>
                <Link href="/signup">ثبت نام</Link>
              </Button>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">باز کردن منو</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <div className="mb-8">
                  <Logo />
                </div>
                <nav className="flex flex-col gap-6 text-lg font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setSheetOpen(false)}
                      className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === link.href ? 'text-foreground font-bold' : 'text-foreground/70'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 flex flex-col gap-2">
                  {isLoggedIn ? (
                    <>
                       {isAdmin && (
                        <Button asChild className="w-full" onClick={() => setSheetOpen(false)}>
                          <Link href="/dashboard">
                            <LayoutDashboard className="ms-2 h-4 w-4" />
                            داشبورد
                          </Link>
                        </Button>
                      )}
                      <Button variant="outline" className="w-full" onClick={closeSheetAndLogout}>
                          <LogOut className="ms-2 h-4 w-4" />
                          خارج شوید
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" asChild className="w-full" onClick={() => setSheetOpen(false)}>
                        <Link href="/login">ورود</Link>
                      </Button>
                      <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setSheetOpen(false)}>
                        <Link href="/signup">ثبت نام</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
