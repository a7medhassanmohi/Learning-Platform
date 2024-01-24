"use client"
import React, { Dispatch, SetStateAction, useState } from 'react'
import { EnrolledCoursesDetailsType } from '../[enrollId]/page'
import { cn } from '@/lib/utils'
import { Lock, Play } from 'lucide-react'

type Props = {
    EnrolledCoursesDetails?:EnrolledCoursesDetailsType,
    isCourseEnrolledByUser:boolean,
    setActiveIndexChapter:Dispatch<SetStateAction<number>>
    ActiveIndexChapter:number,
    ChapterCompleted:EnrolledCoursesDetailsType["completedChapter"] 
}

const WatchCourseContentSection = ({EnrolledCoursesDetails,isCourseEnrolledByUser,ActiveIndexChapter:ActiveIndex,setActiveIndexChapter:setActiveIndex,ChapterCompleted}: Props) => {
  /* check if chapter completed */
  const checkChapterIsCompleted=(id:string)=>{
    return ChapterCompleted?.find((item)=>item.chapterId===id)
  }
  return (
    <div className='p-3 bg-white rounded-sm space-y-2'>
    <h2>Content</h2>
    {EnrolledCoursesDetails?.courseList?.chapter?.map((c,i)=>(
        <div key={c.id} className='space-y-2'>
            <h2 className={cn('py-3 text-[14px] flex justify-between items-center cursor-pointer border rounded-sm px-4 hover:bg-gray-200 hover:text-gray-500 transition-all ',
            ActiveIndex===i && "bg-primary text-white",
            isCourseEnrolledByUser && "hover:bg-primary hover:text-white",
            checkChapterIsCompleted(c.id) && "border border-green-600 bg-green-400",
            checkChapterIsCompleted(c.id) && ActiveIndex===i && "border-[2px]  border-primary  ",
            )}
            onClick={()=>setActiveIndex(i)}
            >
                {i+1}. {c.name}
                
                {ActiveIndex===i || isCourseEnrolledByUser ? <Play className='size-4'/>:<Lock className='size-4'/>}
            </h2>
        </div>
    ))}
    </div>
  )
}

export default WatchCourseContentSection