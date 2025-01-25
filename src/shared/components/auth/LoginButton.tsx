'use client'

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ILoginButtonProps {
  size?: 'sm' | 'lg' | 'default' | 'icon' | null | undefined
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined
  className?: string
}

export default function LoginButton({
  size = 'sm',
  variant = 'default',
  className,
}: ILoginButtonProps) {
  return (
    <Button
      size={size}
      variant={variant}
      className={cn('text-sm sm:px-4 sm:text-base', className)}
    >
      <Link href='/auth/login'>로그인</Link>
    </Button>
  )
}
