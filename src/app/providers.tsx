'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme'; // Importamos el tema personalizado
import NavBar from '@/components/NavBar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}> {/* Aplicamos el tema aquí */}
        <NavBar />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
