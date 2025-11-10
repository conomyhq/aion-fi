'use client'

import { useState, ReactNode } from 'react';
import { Loading } from '@/components/shared/loading/loading';
import { LoadingContext } from '@/components/context/loading';

interface LoadingProviderProps {
  children: ReactNode;
  /**
   * Mostrar loading automático en cambios de ruta
   * Default: false (solo manual)
   */
  autoShowOnRouteChange?: boolean;
  /**
   * Overlay del loading global
   * Default: "blur-light"
   */
  overlay?: "none" | "blur" | "dark" | "light" | "blur-dark" | "blur-light";
  /**
   * Tamaño del loading
   * Default: "lg"
   */
  size?: "sm" | "md" | "lg";
}

export function LoadingProvider({ 
  children, 
  autoShowOnRouteChange = false,
  overlay = "none",
  size = "lg"
}: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<string | undefined>(undefined);

  const showLoading = (message?: string) => {
    setLoadingMessage(message);
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
    setLoadingMessage(undefined);
  };

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      setIsLoading,
      showLoading,
      hideLoading
    }}>
      {isLoading && (
        <Loading 
          variant="fullscreen" 
          size={size} 
          overlay={overlay}
          message={loadingMessage || "Loading..."}
        />
      )}
      {children}
    </LoadingContext.Provider>
  );
}

