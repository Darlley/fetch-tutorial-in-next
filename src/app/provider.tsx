'use client';

import fetcher from '@/services/fetcher';
import { ReactNode } from 'react';
import { SWRConfig } from 'swr';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <SWRConfig value={{ 
      fetcher, 
      refreshInterval: 0,
      revalidateOnFocus: true
    }}>{children}</SWRConfig>
  );
}
