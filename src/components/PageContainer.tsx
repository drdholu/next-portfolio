import GoBack from '@/components/GoBack'
import React from 'react';

const PageContainer = ({ children, title }: {children: React.ReactNode, title: string}) => {
  return (
    <div className="h-screen p-20">
      <div className='flex flex-col border rounded-xl h-full p-5 dark:bg-black dark:border-white/[0.2] bg-white'>
        <div className='flex flex-row items-center mb-10 gap-5'>
          <GoBack/>
          <h1 className='text-5xl'>{title}</h1>
        </div>
        {children}
      </div>
    </div>
  )
}

export default PageContainer
