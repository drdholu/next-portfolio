import GoBack from '@/components/GoBack'
import React from 'react';

const PageContainer = ({ children, title, loading }: {children: React.ReactNode, title: string, loading: boolean}) => {
  return (
    <div className="h-screen p-20">
      <div className='flex flex-col border rounded-xl h-full p-5 dark:bg-black dark:border-white/[0.2] bg-white'>
        <div>
          <div className='flex flex-row items-center mb-10 gap-5'>
            <GoBack/>
            <h1 className='text-5xl'>{title}</h1>
          </div>
        {loading ? 
        
          <div className='flex flex-col justify-center items-center h-full'>
            <span>Work In Progress</span>
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        : 
          <div className='overflow-hidden overflow-y-scroll '>
            {children}
          </div>
        }
        </div>
        
      </div>
    </div>
  )
}

export default PageContainer
