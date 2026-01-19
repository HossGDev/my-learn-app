"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function EnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return (
    <div className="mt-8">
      <h2 className="text-3xl mb-2 font-game">Your Enrolled Courses</h2>
      {enrolledCourses?.length == 0 ? (
        <div className="flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-900">
          <Image src={"/books.png"} alt="books" width={90} height={90} />
          <h2 className="text-xl font-game">No enrolled courses yet</h2>
          <Button variant="pixel" className="font-game text-lg" size="lg">
            See All Courses
          </Button>
        </div>
      ) : (
        <div>List of enrolled courses</div>
      )}
    </div>
  );
}

export default EnrolledCourses;
