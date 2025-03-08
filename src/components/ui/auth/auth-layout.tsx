'use client'

import { Button } from '@/src/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
  titleProps?: React.HTMLAttributes<HTMLHeadingElement>
}

export function AuthLayout({
  children,
  title,
  description,
  titleProps,
}: AuthLayoutProps) {
  const router = useRouter()

  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      {/* Image Section */}
      <div className="hidden lg:block relative bg-muted">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-3xl font-bold text-white">Mocafi Assessment</h1>
          <p className="text-white/80 mt-2 max-w-md">
            Join our team in building the future of financial technology.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center pt-16 lg:pt-24 px-4 lg:px-8">
        <div className="w-full max-w-sm lg:max-w-md">
          {/* Show logo only on mobile */}
          <div className="lg:hidden mb-8">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
              Mocafi Assessment
            </h1>
          </div>

          <div className="flex items-center mb-6 lg:mb-8">
            <Button
              variant="outline"
              size="icon"
              className="-ml-4 lg:h-12 lg:w-12"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-5 w-5 lg:h-6 lg:w-6" />
              <span className="sr-only">Go back</span>
            </Button>
            <h2
              className="text-2xl lg:text-3xl font-bold text-center flex-1 select-none"
              {...titleProps}
            >
              {title}
            </h2>
          </div>
          {description && (
            <p className="text-sm lg:text-base text-muted-foreground text-center mb-6 lg:mb-8">
              {description}
            </p>
          )}
          <div className="space-y-6 lg:space-y-8">{children}</div>
        </div>
      </div>
    </div>
  )
}
