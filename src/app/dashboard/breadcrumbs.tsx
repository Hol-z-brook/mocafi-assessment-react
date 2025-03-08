'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/src/components/ui/breadcrumb'
import { SidebarTrigger } from '@/src/components/ui/sidebar'
import { Separator } from '@/src/components/ui/separator'
import { usePathname } from 'next/navigation'

function Container({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full border-b">
      <div className="flex items-center gap-2 px-4 py-2">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        {children}
      </div>
    </div>
  )
}

export default function DashboardBreadcrumbs({
  children,
}: Readonly<{
  children?: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbList>
          {pathname !== '/dashboard' && (
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">User Management</BreadcrumbLink>
            </BreadcrumbItem>
          )}
          {children && <BreadcrumbSeparator />}
          {children}
        </BreadcrumbList>
      </Breadcrumb>
    </Container>
  )
}
