'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Users, UserPlus, Home } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from '@/src/components/ui/sidebar'

// Navigation data
const navMain = [
  {
    title: 'Overview',
    items: [
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: Home,
      },
    ],
  },
  {
    title: 'User Management',
    items: [
      {
        title: 'All Users',
        url: '/dashboard/users',
        icon: Users,
      },
      {
        title: 'Create User',
        url: '/dashboard/users/new',
        icon: UserPlus,
      },
    ],
  },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <div className="flex h-full flex-col overflow-hidden">
        <SidebarHeader className="flex-none">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold truncate">Mocafi Assessment</h1>
            <h2 className="text-sm truncate">
              Candidate: <span className="font-bold">Andrew Holbrook</span>
            </h2>
          </Link>
        </SidebarHeader>
        <SidebarContent className="flex-1 overflow-y-auto">
          {navMain.map((section) => (
            <SidebarGroup key={section.title}>
              <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={
                          item.url === pathname ||
                          (item.url !== '/dashboard' &&
                            pathname.startsWith(item.url))
                        }
                        tooltip={item.title}
                      >
                        <Link href={item.url} className="truncate">
                          <item.icon className="shrink-0" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarSeparator />
            </SidebarGroup>
          ))}
        </SidebarContent>
      </div>
      <SidebarRail />
    </Sidebar>
  )
}
