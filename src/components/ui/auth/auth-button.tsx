import { Button } from '@/src/components/ui/button'
import { type ComponentProps } from 'react'
import { cn } from '@/src/utils'

interface AuthButtonProps extends ComponentProps<typeof Button> {
  children: React.ReactNode
}

export function AuthButton({ className, children, ...props }: AuthButtonProps) {
  return (
    <Button className={cn('w-full lg:h-12 lg:text-lg', className)} {...props}>
      {children}
    </Button>
  )
}
