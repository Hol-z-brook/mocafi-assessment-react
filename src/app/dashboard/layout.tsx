'use client'

import { SidebarInset, SidebarProvider } from '@/src/components/ui/sidebar'
import DashboardSidebar from './sidebar'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}
