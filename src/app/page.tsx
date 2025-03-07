import Link from 'next/link';
import React from 'react';
import { Button } from "@/src/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center gap-12 py-16">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-6xl font-bold text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Sample User CRUD App
        </h1>
        <p className="max-w-lg text-center text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
          This is a sample CRUD app built with Next.js, Shadcn UI, and GoRest.co.in API.
        </p>
      </div>
      
      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <Button asChild variant="default" size="lg" className="w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Link href="/user">View Current User</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Link href="/users">View All Users</Link>
        </Button>
        <Button asChild variant="secondary" size="lg" className="w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Link href="/users/create">Create a User</Link>
        </Button>
      </div>
    </div>
  );
}
