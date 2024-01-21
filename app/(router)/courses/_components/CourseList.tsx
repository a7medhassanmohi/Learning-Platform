"use client";
import { getCourseList } from "@/utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
type Props = {};
export type CourseItemType = {
  author: string;
  id: string;
  free:boolean,
  name: string;
  description: string;
  demoUrl: string;
  chapter: {
    id: string;
    name: string;
    video: {
      url: string;
    };
  }[];
  banner: {
    url: string;
  };
  sourceCode: string;
  totalChapters: number;
  tag: string[];
};
const CourseList = (props: Props) => {
  const [courseList, setCourseList] = useState<CourseItemType[]>([]);
  const getAllCourses = () => {
    getCourseList().then((res: any) => {
      console.log(res);
      setCourseList(res?.courseLists);
    });
  };

  useEffect(() => {
    getAllCourses();
  }, []);
  return (
    <div className="space-y-5 p-5 bg-white rounded-xl">
      {/*      title and Filter */}
      <div className="space-y-2 flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
        <Select>
          <SelectTrigger className=" w-fit md:w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Paid">Paid</SelectItem>
            <SelectItem value="Free">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* display Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {courseList.length?courseList.map((item, index) => (
          <div key={item.id} className="">
            <CourseItem course={item} />
          </div>
        )):(Array.from({length:7}).map((item,i)=>
       (<LoadingCourseList key={i}/>)
        ))}
      </div>
    </div>
  );
};

export default CourseList;



function LoadingCourseList(){
    return(
        <div  className="w-full rounded-xl  bg-slate-200 animate-pulse ">
            <div className="aspect-video animate-pulse bg-slate-300 "></div>
            <div className="h-5 m-2 rounded-xl w-[90%] animate-pulse bg-slate-300 "></div>
            <div className="h-5 m-2 rounded-xl w-[80%] animate-pulse bg-slate-300 "></div>
            <div className="h-5 m-2 rounded-xl w-[60%] animate-pulse bg-slate-300 "></div>
       </div>
    )
}