"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            gcTime: 10 * 60 * 1000, // 10 minutes
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Position options - uncomment the one you want */}
      
      {/* Bottom Right (default) */}
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      
      {/* Top Right */}
      <ReactQueryDevtools initialIsOpen={false} />
      
      {/* Bottom Left */}
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-left" /> */}
      
      {/* Top Left */}
      {/* <ReactQueryDevtools initialIsOpen={false} position="top-left" /> */}
    </QueryClientProvider>
  );
} 