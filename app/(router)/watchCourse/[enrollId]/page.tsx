"use client";
import { getUserEnrolledCourseDetails } from "@/utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import WatchCourseVideoDescription from "../_components/WatchCourseVideoDescription";
import WatchCourseContentSection from "../_components/WatchCourseContentSection";

type Props = {
  params: { enrollId: string };
};
export type EnrolledCoursesDetailsType = {
  completedChapter: [];
  courseId: string;
  id: string;
  userEmail: string;
  courseList: {
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
  const [userEnrollCourse, setUserEnrollCourse] = useState<EnrolledCoursesDetailsType>();
  const [ActiveIndexChapter, setActiveIndexChapter] = useState<number>(0)

  const getUserEnrolledCourse = () => {
    getUserEnrolledCourseDetails(
      enrollId,
      user?.primaryEmailAddress?.emailAddress
    ).then((res: any) => {
      console.log(res?.userEnrollCourses[0]);
      setUserEnrollCourse(res?.userEnrollCourses[0])
    });
  };
  useEffect(() => {
    getUserEnrolledCourse();
  }, [enrollId, user]);

  return  userEnrollCourse ?(<div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
  {/* title video description */}
  <div className='col-span-2 p-3 bg-white rounded-xl '>
      <WatchCourseVideoDescription EnrolledCoursesDetails={userEnrollCourse}
      ActiveIndexChapter={ActiveIndexChapter}
      /> 
  </div>

  {/* course content */}
  <div className=''>
  <WatchCourseContentSection EnrolledCoursesDetails={userEnrollCourse} isCourseEnrolledByUser={true}
  ActiveIndexChapter={ActiveIndexChapter}
  setActiveIndexChapter={setActiveIndexChapter}
  />
  </div>

</div>):null;
};

export default WatchCourse;
