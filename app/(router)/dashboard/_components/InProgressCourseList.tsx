"use client";
import { getUserCoursesForDashBoard } from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import { EnrolledCoursesDetailsType } from "../../watchCourse/[enrollId]/page";
import ProgressCourseItem from "./ProgressCourseItem";
import { LoadingCourseList } from "../../courses/_components/CourseList";

type Props = {
  userEmail: string | undefined;
};

const InProgressCourseList = ({ userEmail }: Props) => {
  const [courseUserList, setCourseUserList] = useState<
    EnrolledCoursesDetailsType[]
  >([]);
  const getAllUserCourses = () => {
    getUserCoursesForDashBoard(userEmail as string).then((res: any) => {
      if (res?.userEnrollCourses) {
        console.log(res);

        setCourseUserList(res?.userEnrollCourses);
      }
    });
  };
  useEffect(() => {
    getAllUserCourses();
  }, []);
  return (
      <div className="p-5 bg-white mt-3 rounded-xl space-y-3">
        <h2 className="text-primary text-[18px] font-semibold ">
          Recent Enrolled courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          { courseUserList.length? (courseUserList?.map((item, i) => (
            <ProgressCourseItem key={i} course={item} />
          ))):(Array.from({length:7}).map((item,i)=>
          (<LoadingCourseList key={i}/>)
           ))}
        </div>
      </div>
  )
};

export default InProgressCourseList;
