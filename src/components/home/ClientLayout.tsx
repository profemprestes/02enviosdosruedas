'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import OptimizedHeader from '@/components/layout/OptimizedHeader';
import OptimizedFooter from '@/components/layout/OptimizedFooter';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      {isHome ? <OptimizedHeader /> : <Navbar />}
      <main className={`flex-grow ${isHome ? 'pt-0' : 'pt-20'}`}>
        {children}
      </main>
      {isHome ? <OptimizedFooter /> : <Footer />}
    </>
  );
}
