"use client";

import axios from "axios";
import { ChartNoAxesColumnIncreasingIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Course = {
  id: number;
  courseId: number;
  title: string;
  desc: string;
  level: string;
  bannerImage: string;
  tag: string;
};

function CourseList() {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllCourses = async () => {
      setLoading(true);
      const result = await axios.get("/api/course");
      console.log(result);
      setCourseList(result?.data);
      setLoading(false);
    };
    getAllCourses();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-3">
      {courseList?.map((course, index) => (
        <div
          key={index}
          className="border-4 rounded-xl hover:bg-zinc-900 cursor-pointer"
        >
          <Image
            src={course?.bannerImage.trimEnd()}
            alt={course?.title}
            width={400}
            height={400}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-game">{course?.title}</h2>
            <p className="text-xl font-game text-gray-400 line-clamp-2">
              {course?.desc}
            </p>
            <h2 className="bg-zinc-800 gap-2 font-game p-1 px-4 mt-3 rounded-2xl items-center inline-flex">
              <ChartNoAxesColumnIncreasingIcon className="w-4 h-4" />
              {course.level}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
