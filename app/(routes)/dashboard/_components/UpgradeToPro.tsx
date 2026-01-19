import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function UpgradeToPro() {
  return (
    <div className="mt-10 flex flex-col items-center gap-5 p-5 border-4 rounded-2xl">
      <Image src={"/logo.png"} alt="logo" width={70} height={70} />
      <h2 className="text-3xl font-game">Upgrade to Pro</h2>
      <p className="text-gray-500 text-xl text-center">
        Get access to all premium courses
      </p>
      <Link href={"/pricing"}>
        <Button className="font-game" variant={"pixel"} size={"lg"}>
          Upgrade to Pro
        </Button>
      </Link>
    </div>
  );
}

export default UpgradeToPro;
