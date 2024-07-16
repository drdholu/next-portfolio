'use client'
import React from 'react'
import ShimmerButton from '@/components/ui/shimmer-button'
import info from '@/data/info'
import PageContainer from '@/components/PageContainer'

const Page = () => {
  return (
    <PageContainer title="Skills">
      <div>
        {info.Skills.details.map((skill, idx) => (
          <div key={idx} className='mb-5'>
            <h2 className='text-3xl mb-2'>{skill.name}</h2>
              {skill.technologies.map((tech, techIdx) => (
                <span key={techIdx} className='mr-2'>
                  <ShimmerButton text={tech}></ShimmerButton>
                </span>
              ))}
          </div>
        ))}
      </div>
    </PageContainer>
  )
}

export default Page
