"use client";
import Image from "next/image";
import CourseList from "./_components/CourseList";

function Courses() {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/classroom.gif"}
          alt="classroom"
          width={200}
          height={200}
          className="w-full h-[300px] object-cover"
        />
        <div
          className={[
            "absolute top-0 h-full pt-24 px-10",
            "md:px-24 lg:px-36",
            "bg-linear-to-r from-black/70 to-white-50/50",
          ].join(" ")}
        >
          <h2 className="text-6xl font-game">Explore All Courses</h2>
          <p className="text-2xl font-game">
            Check out our courses and start learning today and improve your
            coding skills!
          </p>
        </div>
      </div>
      <div className="mt-8 pt-24 px-10 md:px-24 lg:px-36">
        <h2 className="text-4xl font-game">All Courses</h2>
        <CourseList />
      </div>
    </div>
  );
}

export default Courses;
