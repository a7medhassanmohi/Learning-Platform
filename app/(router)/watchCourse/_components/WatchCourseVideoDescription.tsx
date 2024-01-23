import React from 'react'
import { EnrolledCoursesDetailsType } from '../[enrollId]/page'
import Markdown from 'react-markdown'
import VideoPlayer from '../../coursepreview/_components/VideoPlayer'

type Props = {
    EnrolledCoursesDetails?:EnrolledCoursesDetailsType,
    ActiveIndexChapter:number
}

const WatchCourseVideoDescription = ({EnrolledCoursesDetails,ActiveIndexChapter}: Props) => {
  return (
    <div className=''>
    <h2 className='text-[20px] font-semibold'>{EnrolledCoursesDetails?.courseList.name}</h2>
    <h2 className='text-gray-500 text-[14px]'>{EnrolledCoursesDetails?.courseList?.author}</h2>
    {/* video player */}
    <VideoPlayer videoUrl={EnrolledCoursesDetails?.courseList?.chapter[ActiveIndexChapter]?.video?.url} poster={""}/>
    <h2 className='mt-5 text-[17px] font-semibold'>
      {EnrolledCoursesDetails?.courseList?.chapter[ActiveIndexChapter]?.name}
    
      
      </h2>
    <div className=''>
      <Markdown className="text-[14px] font-light mt-2 leading-6 max-w-full text-balance ">{EnrolledCoursesDetails?.courseList?.chapter[ActiveIndexChapter]?.shortDesc}</Markdown>
    </div>
</div>
  )
}

export default WatchCourseVideoDescription