"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

function WelcomeBanner() {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-3">
      <Image
        src={"/jerry-3.png"}
        alt="computer"
        width={120}
        height={120}
        className="rounded-full"
      />
      <h2 className="font-game text-2xl p-4 border bg-zinc-800 rounded-lg rounded-bl-none">
        Welcome Back, <span className="text-yellow-500">{user?.fullName}</span>,
        what do you want to learn today?
      </h2>
    </div>
  );
}

export default WelcomeBanner;
