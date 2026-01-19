"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

function UserStatus() {
  const { user } = useUser();
  return (
    <div className="p-4 border-4 rounded-2xl">
      <div className="flex items-center gap-3">
        <Image
          src={"/robot-tfu.gif"}
          alt="floating robot"
          width={100}
          height={100}
          property="unoptimized"
        />
        <h2 className="text-xl font-game">
          {user?.primaryEmailAddress?.emailAddress}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex items-center gap-3">
          <Image src={"/smiley.png"} alt="star" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">20</h2>
            <h2 className="font-game text-xl text-gray-500">Total Rewards</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image src={"/badge.png"} alt="badge" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">3</h2>
            <h2 className="font-game text-xl text-gray-500">Badges</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image src={"/fire.png"} alt="streak" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">20</h2>
            <h2 className="font-game text-xl text-gray-500">Daily Streak</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStatus;
