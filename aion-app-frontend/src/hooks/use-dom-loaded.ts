'use client'

import { useEffect, useState } from 'react';


export function useDOMLoaded() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoaded(true);
      return;
    }
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return isLoaded;
}

export function useDOMReady() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Si ya está listo
    if (document.readyState !== 'loading') {
      setIsReady(true);
      return;
    }
    const handleReady = () => {
      setIsReady(true);
    };

    document.addEventListener('DOMContentLoaded', handleReady);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleReady);
    };
  }, []);

  return isReady;
}

