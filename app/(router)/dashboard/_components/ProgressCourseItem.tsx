import React, { ReactNode } from 'react'
import { EnrolledCoursesDetailsType } from '../../watchCourse/[enrollId]/page'
import Image from 'next/image'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

type Props = {
    course:EnrolledCoursesDetailsType
}

const ProgressCourseItem = ({course}: Props) => {
  const totalChapter=course.courseList.totalChapters
  const totalCompletedChapter=course.completedChapter.length
 const percentage=(totalCompletedChapter/totalChapter)*100
  return (
    <Link href={`/coursepreview/${course.courseList.id}`}>
      <div className='border rounded-xl hover:shadow-md cursor-pointer transition-shadow'>
          <Image src={course.courseList.banner.url} alt="banner"
          height={250}
          width={800}
          className='rounded-t-xl aspect-video object-cover'
          />
          <div className='flex flex-col gap-1 p-2'>
              <h2 className='font-medium'>{course.courseList.name}</h2>
              <h2 className='text-[14px] text-gray-400'>{course.courseList.author}</h2>
              {course.courseList.chapter.length?
              <div className='flex gap-2 items-center '>
                  <Image src="/youtube.png" alt='youtube icon'
                  width={20}
                  height={20}
                  />
                  <h2 className='text-[16px] text-gray-400'>watch on youtube</h2>
              </div>:
              <div className='flex gap-2 items-center '>
                  <Image src="/chapter.png" alt='chapter icon'
                  width={20}
                  height={20}
                  />
                  <h2 className='text-[16px] text-gray-400'>chapters</h2>
              </div>
              }
              <h2 className='text-[12px] text-gray-400 mt-3 '>
               {percentage.toFixed(2)}%
                <span className='float-right'>{course.completedChapter.length}/{course.courseList.totalChapters} chapters</span></h2>
              <Progress value={percentage} className='h-[7px]' />
          </div>
      </div>
    </Link>
  )
}

export default ProgressCourseItem