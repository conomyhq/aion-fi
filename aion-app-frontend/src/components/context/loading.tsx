'use client'

import { createContext, useContext } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  showLoading: (message?: string) => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | null>(null);

export function useLoadingContext() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoadingContext must be used within LoadingProvider');
  }
  return context;
}

export { LoadingContext };
export type { LoadingContextType };