"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full relative h-screen overflow-hidden">
      <Image
        src="/code_hero.png"
        alt="hero"
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute inset-0"
        style={{ objectPosition: "50% 30%" }}
      />

      <div className="absolute w-full flex flex-col items-center">
        <h2 className="font-bold text-7xl font-game">Start Your</h2>
        <h2
          className="font-bold text-8xl font-game text-yellow-400"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
          }}
        >
          Coding Journey
        </h2>
        <h2 className="text-3xl font-game">
          Courses and projects for absolute beginners
        </h2>
        <Link href={"/sign-in"}>
          <Button
            className="font-game text-3xl p-6 rounded-full"
            variant="pixel"
          >
            GET STARTED
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
