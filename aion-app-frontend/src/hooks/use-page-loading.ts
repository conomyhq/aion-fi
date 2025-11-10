'use client'

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function usePageLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(false);
  }, [pathname, searchParams]);

  return isLoading;
}

