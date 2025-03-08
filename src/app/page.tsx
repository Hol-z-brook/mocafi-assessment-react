import React from 'react'
import Link from 'next/link'
import { Button } from '@/src/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center gap-12 py-16 px-4">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Mocafi Assessment
        </h1>
        <h2 className="text-6xl font-bold text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Andrew Holbrook
        </h2>
        <h2 className="text-2xl font-bold text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Sample User Management App
        </h2>
        <p className="max-w-lg text-center text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
          This is a sample user management app built with Next.js, Shadcn UI,
          and GoRest.co.in API.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 w-full max-w-sm px-4">
        <Button
          asChild
          variant="default"
          size="lg"
          className="w-full animate-in fade-in slide-in-from-bottom-4 duration-1000"
        >
          <Link href="/login">Login</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="w-full animate-in fade-in slide-in-from-bottom-4 duration-1000"
        >
          <Link href="/signup">Signup</Link>
        </Button>
      </div>
    </div>
  )
}
