'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-stroke bg-bg mt-auto mb-8">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Copyright */}
          <Link href="/" className="flex items-center">
              <Image src="/logo/aion-fi-logo.svg" alt="Aion" width={32} height={32} className="h-8 w-auto" />
            </Link>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <Link
              href="/terms"
              className="text-small text-muted hover:text-text transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-small text-muted hover:text-text transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/docs"
              className="text-small text-muted hover:text-text transition-colors"
            >
              Docs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}