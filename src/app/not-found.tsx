import Link from 'next/link'
import { ChevronRight, RefreshCcw } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4 dark:from-gray-900 dark:to-gray-800'>
      <div className='w-full max-w-3xl'>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='h-64 w-64 animate-pulse rounded-full bg-blue-500 opacity-20 blur-3xl filter'></div>
          </div>
          <div className='relative z-10 text-center'>
            <h1 className='text-9xl font-extrabold text-gray-800 dark:text-gray-200'>
              4<span className='text-blue-500'>0</span>4
            </h1>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-700 dark:text-gray-300'>
            페이지를 찾을 수 없습니다
          </h2>
          <p className='mx-auto mb-8 max-w-lg text-xl text-gray-600 dark:text-gray-400'>
            죄송합니다. 요청하신 페이지가 존재하지 않거나 이동되었을 수
            있습니다.
          </p>
          <div className='flex items-center justify-center gap-4'>
            <Button asChild className='w-full sm:w-auto'>
              <Link href='/' className='flex items-center justify-center'>
                홈페이지로 돌아가기
                <ChevronRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='mt-16 text-center'>
        <p className='flex items-center justify-center text-sm text-gray-500 dark:text-gray-400'>
          <RefreshCcw className='mr-2 h-4 w-4' />
          페이지를 새로고침하거나 잠시 후 다시 시도해 보세요.
        </p>
      </div>
    </div>
  )
}
