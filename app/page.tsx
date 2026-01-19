import Hero from "./_components/Hero";

/*
  Default page of application
 * @returns
*/

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <Hero />
    </div>
  );
}
