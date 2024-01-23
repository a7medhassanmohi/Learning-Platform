"use client"
import React, { useState } from 'react'
import { CourseInfo } from '../[courseId]/page'
import { Lock, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
    courseInfo:CourseInfo |undefined,
    isCourseEnrolledByUser:string | undefined
}

const CourseContentSection = ({courseInfo,isCourseEnrolledByUser}: Props) => {
    const [ActiveIndex, setActiveIndex] = useState<number>(0)
  return (
    <div className='p-3 bg-white rounded-sm space-y-2'>
    <h2>Content</h2>
    {courseInfo?.chapter?.map((c,i)=>(
        <div key={c.id} className='space-y-2'>
            <h2 className={cn('py-3 text-[14px] flex justify-between items-center cursor-pointer border rounded-sm px-4 hover:bg-gray-200 hover:text-gray-500 transition-all ',
            ActiveIndex===i && "bg-primary text-white",
            isCourseEnrolledByUser && "hover:bg-primary hover:text-white"
            )}>
                {i+1}. {c.name}
                
                {ActiveIndex===i || isCourseEnrolledByUser ? <Play className='size-4'/>:<Lock className='size-4'/>}
            </h2>
        </div>
    ))}
    </div>
  )
}

export default CourseContentSection