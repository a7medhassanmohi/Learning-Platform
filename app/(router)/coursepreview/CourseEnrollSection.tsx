import { Button } from "@/components/ui/button";
import React from "react";
import { useUser } from '@clerk/nextjs';
import { CourseInfo } from "./[courseId]/page";
import Link from "next/link";
import { enrollCourses } from "@/app/_utils/GlobalApi";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
type Props = {
  courseInfo:CourseInfo | undefined,
  isCourseEnrolledByUser:string | undefined
};

const CourseEnrollSection =  ({courseInfo,isCourseEnrolledByUser}: Props) => {
  const hasMemberShip=false
  const courseIsFree=courseInfo?.free
  const { user,isLoaded, } = useUser();
  const router=useRouter()
  function onEnrollCourse(){
    if(user?.primaryEmailAddress && courseInfo){
      enrollCourses(courseInfo?.id,user?.primaryEmailAddress?.emailAddress).then((res:any)=>{
        if(res?.createUserEnrollCourse?.id){          
          toast({
            title: "User Enrolled Successful",
            
          })
          router.push(`/watchCourse/${res?.createUserEnrollCourse?.id}`)
        }
      }).catch((error)=>{
        toast({
          variant:"destructive",
          title: "something went wrong wile enroll",
          description: "",
        })
      })
    }
  }
  
  return (
    <div className="p-3 py-5 text-center rounded-sm bg-primary flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-white"> Enroll to the Course</h2>

      {user  && !isCourseEnrolledByUser && (
        /* if user has membership or login */
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            {" "}
            Enroll Now to Start Learning and Building Project
          </h2>
          <Button
            variant={"outline"}
            className="bg-white text-primary hover:text-primary "
            onClick={()=>onEnrollCourse()}
          >
            Enroll Now
          </Button>
        </div>
      ) }

      {/* continue Button */}
    {isCourseEnrolledByUser &&  
    <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            Continue to Learn Your Project
          
          </h2>

          <Link href={`/watchCourse/${isCourseEnrolledByUser}`}>
            <Button
              variant={"outline"}
              className="bg-white text-primary hover:text-primary w-full "
            >
              Continue
            </Button>
          </Link>
        </div>
        }
    </div>
  );
};

export default CourseEnrollSection;
