'use client';

import Link from 'next/link';

interface ErrorPageProps {
  searchParams: {
    message?: string;
    redirect_to?: string | null;
  };
}

export default function ErrorPage({ searchParams }: ErrorPageProps) {
  const message = searchParams.message || '문제가 발생했습니다.';
  const redirectTo = searchParams?.redirect_to;

  return (
    <div className='flex min-h-screen animate-fadeIn flex-col items-center justify-center gap-8 bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='space-y-4 text-center'>
        <h2 className='bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent'>
          문제 발생
        </h2>
        <p className='text-lg text-gray-600'>{message} </p>
      </div>

      <Link
        href={redirectTo ?? '/'}
        className='group relative inline-flex transform items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-all duration-200 ease-in-out hover:translate-y-[-2px] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      >
        돌아가기
      </Link>
    </div>
  );
}
