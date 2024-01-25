"use client"
import React, { useEffect, useState, useTransition } from 'react'
import CourseVideoDescription from '../_components/CourseVideoDescription'
import { checkUserEnrolledCourses, getCourseById } from '@/app/_utils/GlobalApi'
import CourseEnrollSection from '../CourseEnrollSection'
import CourseContentSection from '../_components/CourseContentSection'
import { useUser } from '@clerk/nextjs'
import LoadingCoursePreview from '../_components/LoadingCoursePreview'

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
  const {user}=useUser()
  const [isLoading,setIsLoading]=useState(true)
  const[isCourseEnrolledByUser,setIsCourseEnrolledByUser]=useState<string | undefined>()
const [courseInfo,setCourseInfo]=useState<CourseInfo>()
  const getCourseInfoById=()=>{
    getCourseById(courseId).then((res:any)=>{
      setCourseInfo(res?.courseList)
    })
  }

  const CheckUserEnrolledToCourses=()=>{
    if(courseInfo && user?.primaryEmailAddress){
      checkUserEnrolledCourses(courseInfo?.id,user?.primaryEmailAddress?.emailAddress).then((res:any)=>{
        if(res?.userEnrollCourses.length){
          setIsCourseEnrolledByUser(res?.userEnrollCourses[0]?.id)
          setIsLoading(false)
        }
        
      }).catch(()=>{}).finally(()=>{
        setIsLoading(false)
      })
    }
    }
  useEffect(() => {
    if(courseId){

      getCourseInfoById()
    }
  }, [courseId])
  
  useEffect(()=>{
if(courseInfo && user){
  CheckUserEnrolledToCourses()
}
  },[courseInfo,user])
  
  return courseInfo && !isLoading ? (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      {/* title video description */}
      <div className='col-span-2 p-3 bg-white rounded-xl '>
         {courseInfo && <CourseVideoDescription courseInfo={courseInfo}/> } 
      </div>

      {/* course content */}
      <div className=''>
      <CourseEnrollSection courseInfo={courseInfo} isCourseEnrolledByUser={isCourseEnrolledByUser}/>
      <CourseContentSection courseInfo={courseInfo} isCourseEnrolledByUser={isCourseEnrolledByUser}/>
      </div>

    </div>
  ):(<LoadingCoursePreview/>)
}

export default CoursePreview

