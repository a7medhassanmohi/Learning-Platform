import React from 'react'
import { CourseItemType } from './CourseList'
import Image from 'next/image'

type Props = {
    course:CourseItemType
}  

const CourseItem = ({course}: Props) => {
  return (
    <div className='border rounded-xl hover:shadow-md cursor-pointer transition-shadow'>
        <Image src={course.banner.url} alt="banner"
        height={250}
        width={800}
        className='rounded-t-xl aspect-video object-cover'
        />
        <div className='flex flex-col gap-1 p-2'>
            <h2 className='font-medium'>{course.name}</h2>
            <h2 className='text-[14px] text-gray-400'>{course.author}</h2>
            <div className='flex gap-2 items-center '>
                <Image src="/chapter.png" alt='chapter icon' 
                width={20}
                height={20}
                />
                <h2 className='text-[16px] text-gray-400'>{course.totalChapters} chapters</h2>
            </div>
            <h2 className='text-[15px] my-2 px-3 py-1 rounded-full  w-fit bg-black text-white ml-auto'> Free</h2>
        </div>
    </div>
  )
}

export default CourseItem