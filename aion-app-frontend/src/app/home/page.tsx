'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loading } from '@/components/shared/loading/loading';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/pools');
    }, 500); 
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Loading variant="fullscreen" message="Loading..." size="lg" overlay="none" />  
  );
}