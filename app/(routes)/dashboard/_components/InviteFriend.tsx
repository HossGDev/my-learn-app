import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

function InviteFriend() {
  return (
    <div className="flex flex-col items-center mt-8 p-4 border rounded-xl bg-zinc-900">
      <Image src={"/user.png"} alt="invite" width={80} height={80} />
      <h2 className="text-3xl font-game">Invite Friend</h2>
      <p className="font-game">
        Invite your friends to start learning together! Enter their email
        address below and we will send them an invitation.
      </p>
      <div className="flex items-center gap-2 mt-5">
        <Input placeholder="Enter Invitee email address" className="min-w-sm" />
        <Button variant={"pixel"} className="font-game">
          Invite
        </Button>
      </div>
    </div>
  );
}

export default InviteFriend;
