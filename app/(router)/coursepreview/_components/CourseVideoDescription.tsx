import React from 'react'
import { CourseInfo } from '../[courseId]/page'
import { redirect } from 'next/navigation'
import VideoPlayer from './VideoPlayer'
import Markdown from 'react-markdown'
import { EnrolledCoursesDetailsType } from '../../watchCourse/[enrollId]/page'
type Props = {
    courseInfo:CourseInfo |undefined
}
const CourseVideoDescription = ({courseInfo}: Props) => {
if(!courseInfo) return redirect("/courses")
  return (
    <div className=''>
        <h2 className='text-[20px] font-semibold'>{courseInfo?.name}</h2>
        <h2 className='text-gray-500 text-[14px]'>{courseInfo?.author}</h2>
        {/* video player */}
        <VideoPlayer videoUrl={courseInfo?.chapter[0]?.video?.url} poster={courseInfo.banner.url}/>
        <h2 className='mt-5 text-[17px] font-semibold'>About this course</h2>
        <div className=''>
          <Markdown className="text-[14px] font-light mt-2 leading-6 max-w-full text-balance ">{courseInfo.description}</Markdown>
        </div>
    </div>
  )
}

export default CourseVideoDescription