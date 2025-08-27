'use client';

import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { useLenis, useTimeOut } from '@/hooks';

import { Preloader } from './preloader';

/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();

  useLenis();
  // Reduce preloader time for faster perceived performance and lower motion
  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
    },
    duration: 1200,
    deps: [],
  });

  return (
    <div key={pathname} className='overflow-hidden'>
      {/* Keep preloader minimal and short-lived; disabled automatically under reduced-motion via CSS */}
      <AnimatePresence mode='wait'>
        {isLoading ? <Preloader /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
}
