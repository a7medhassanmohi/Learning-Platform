import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const CourseEnrollSection = (props: Props) => {
  return (
    <div className="p-3 py-5 text-center rounded-sm bg-primary flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-white"> Enroll to the Course</h2>

      {!true ? (
        /* if user has membership or login */
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            {" "}
            Enroll Now to Start Learning and Building Project
          </h2>
          <Button
            variant={"outline"}
            className="bg-white text-primary hover:text-primary "
          >
            Enroll Now
          </Button>
        </div>
      ) : (
        /* if user doesn't have membership or login */
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            {" "}
            Buy Monthy MemberShip and get access to all courses
          </h2>
          <Button
            variant={"outline"}
            className="bg-white text-primary hover:text-primary "
          >
            Buy MemberShip just $ 5.00
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseEnrollSection;
