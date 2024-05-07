'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { SidebarProvider } from '@/lib/hooks/use-sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export function Providers({ children, ...props }: ThemeProviderProps) {
  const { theme } = useTheme()

  if (theme === 'dark' || theme === undefined) {
    return (
      <NextThemesProvider {...props}>
        <ClerkProvider appearance={{ baseTheme: dark }}>
          <SidebarProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </SidebarProvider>
        </ClerkProvider>
      </NextThemesProvider>
    )
  }

  return (
    <NextThemesProvider {...props}>
      <ClerkProvider>
        <SidebarProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </SidebarProvider>
      </ClerkProvider>
    </NextThemesProvider>
  )
}
