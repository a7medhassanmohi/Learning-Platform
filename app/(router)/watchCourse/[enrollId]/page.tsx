"use client";
import { getUserEnrolledCourseDetails, markChapterCompletedEndPoint } from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import WatchCourseVideoDescription from "../_components/WatchCourseVideoDescription";
import WatchCourseContentSection from "../_components/WatchCourseContentSection";
import { toast } from "@/components/ui/use-toast";

type Props = {
  params: { enrollId: string };
};
export type EnrolledCoursesDetailsType = {
  completedChapter: {
    chapterId:string,
    id:string,
    stage:string
  }[];
  courseId: string;
  id: string;
  userEmail: string;
  courseList: {
    id:string,
    author: string;
    banner: {
      url: string;
    };
    chapter: {
      id: string;
      name: string;
      shortDesc: string;
      video: {
        url: string;
      };
    }[];
    demoUrl: string;
    description: string;
    free: boolean;
    name: string;
    sourceCode: string;
    totalChapters: number;
    tag: string[];
  };
};

const WatchCourse = ({ params: { enrollId } }: Props) => {
  const { user } = useUser();
  const [ChapterCompleted, setChapterCompleted] = useState<EnrolledCoursesDetailsType["completedChapter"]>([])
  const [userEnrollCourse, setUserEnrollCourse] = useState<EnrolledCoursesDetailsType>();
  const [ActiveIndexChapter, setActiveIndexChapter] = useState<number>(0)

  const getUserEnrolledCourse = () => {
    getUserEnrolledCourseDetails(
      enrollId,
      user?.primaryEmailAddress?.emailAddress
    ).then((res: any) => {
      if(res?.userEnrollCourses){

        setChapterCompleted(res?.userEnrollCourses[0]?.completedChapter)
        setUserEnrollCourse(res?.userEnrollCourses[0])
      }
    });
  };
/* save completed chapter id */
const onChapterCompleted=(chapterId:string | undefined)=>{
  markChapterCompletedEndPoint(enrollId,chapterId).then((res:any)=>{
    console.log(res);
    toast({
      title: "Chapter Marked as Completed",
    })
    const newChapter={chapterId:chapterId as string,id:enrollId,stage:"ssss"} 
    setChapterCompleted((prev)=>[...prev,newChapter])
  }).catch((error)=>{

  }).finally(()=>{

  })
}

  useEffect(() => {
    getUserEnrolledCourse();
  }, [enrollId, user]);

  return  userEnrollCourse ?(<div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
  {/* title video description */}
  <div className='col-span-2 p-3 bg-white rounded-xl '>
      <WatchCourseVideoDescription EnrolledCoursesDetails={userEnrollCourse}
      ActiveIndexChapter={ActiveIndexChapter}
      setChapterCompleted={onChapterCompleted}
      ChapterCompleted={ChapterCompleted}
      /> 
  </div>

  {/* course content */}
  <div className=''>
  <WatchCourseContentSection EnrolledCoursesDetails={userEnrollCourse} isCourseEnrolledByUser={true}
  ActiveIndexChapter={ActiveIndexChapter}
  setActiveIndexChapter={setActiveIndexChapter}
  ChapterCompleted={ChapterCompleted}
  />
  </div>

</div>):null;
};

export default WatchCourse;
