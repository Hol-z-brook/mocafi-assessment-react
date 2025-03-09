'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from './button'
import { cn } from '@/src/utils'

interface PaginationProps {
  currentPage: number
  pageSize: number
  hasMore: boolean
  className?: string
}

export function Pagination({
  currentPage,
  pageSize,
  hasMore,
  className,
}: PaginationProps) {
  const hasPrevious = currentPage > 1

  return (
    <div className={cn('flex items-center justify-between px-2', className)}>
      <div className="flex w-[100px] justify-start">
        {hasPrevious && (
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" asChild>
            <Link
              href={{
                query: {
                  page: currentPage - 1,
                  perPage: pageSize,
                },
              }}
            >
              <span className="sr-only">Previous page</span>
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium">Page {currentPage}</p>
      </div>
      <div className="flex w-[100px] justify-end">
        {hasMore && (
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" asChild>
            <Link
              href={{
                query: {
                  page: currentPage + 1,
                  perPage: pageSize,
                },
              }}
            >
              <span className="sr-only">Next page</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
