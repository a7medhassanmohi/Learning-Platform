"use client"
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from '../_components/CourseVideoDescription'
import { getCourseById } from '@/utils/GlobalApi'
import CourseEnrollSection from '../CourseEnrollSection'
import CourseContentSection from '../_components/CourseContentSection'

type Props = {
  params:{
    courseId:string
  }
}
export type CourseInfo={
  author:string,
  banner:{
    url:string
  },
  chapter:{
    id:string,
    name:string,
    video:{
      url:string
    },
    shortDesc:string
  }[],
  demoUrl:string,
  description:string,
  id:string,
  name:string,
  sourceCode:string,
  totalChapters:number,
  free:boolean,
  tag:string[]
}

const CoursePreview = ({params:{courseId}}: Props) => {
const [courseInfo,setCourseInfo]=useState<CourseInfo>()
  const getCourseInfoById=()=>{
    getCourseById(courseId).then((res:any)=>{
      setCourseInfo(res?.courseList)
    console.log(res?.courseList);

    })
  }
  useEffect(() => {
    if(courseId){

      getCourseInfoById()
    }
  }, [courseId])
  
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      {/* title video description */}
      <div className='col-span-2 p-3 bg-white rounded-xl '>
         {courseInfo && <CourseVideoDescription courseInfo={courseInfo}/> } 
      </div>

      {/* course content */}
      <div className=''>
      <CourseEnrollSection courseInfo={courseInfo}/>
      <CourseContentSection courseInfo={courseInfo}/>
      </div>

    </div>
  )
}

export default CoursePreview