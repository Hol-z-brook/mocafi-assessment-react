import { Button } from '@/src/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import DashboardBreadcrumbs from './breadcrumbs'
import { BreadcrumbItem } from '@/src/components/ui/breadcrumb'

export default function NotFound() {
  return (
    <>
      <DashboardBreadcrumbs>
        <BreadcrumbItem>Not Found</BreadcrumbItem>
      </DashboardBreadcrumbs>
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="icon">
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Go back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-semibold">Page Not Found</h1>
        </div>

        <Card className="max-w-4xl">
          <CardHeader>
            <CardTitle className="text-xl">404 - Not Found</CardTitle>
            <CardDescription>
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  )
}
