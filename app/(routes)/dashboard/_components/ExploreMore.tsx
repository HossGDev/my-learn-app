import Image from "next/image";

const ExploreMoreOptions = [
  {
    id: 1,
    title: "Quizz Pack",
    desc: "Practice what you learned with bite-sized code challenges.",
    icon: "/brain.png",
  },
  {
    id: 2,
    title: "Video Courses",
    desc: "Learn with structured video lessons taught step-by-step.",
    icon: "/monitor.png",
  },
  {
    id: 3,
    title: "Community Project",
    desc: "Build real-world apps by collaborating with the community.",
    icon: "/city.png",
  },
  {
    id: 4,
    title: "Talk with AI",
    desc: "Chat with AI to get help, explanations, and debugging tips.",
    icon: "/cyberpunk-robot.png",
  },
];

function ExploreMore() {
  return (
    <div className="mt-8">
      <h2 className="text-3xl mb-2 font-game">Explore More</h2>
      <div className="grid grid-cols-2 gap-5">
        {ExploreMoreOptions.map((option, index) => (
          <div
            key={index}
            className="flex  gap-2 p-2 border  rounded-xl bg-zinc-900"
          >
            <Image
              src={option?.icon}
              alt={option?.title}
              width={80}
              height={80}
            />
            <div>
              <h2 className="font-medium text-2xl font-game">
                {option?.title}
              </h2>
              <p className="text-gray-500 font-game">{option?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMore;
