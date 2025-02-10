import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Map } from "lucide-react";
import React from "react";

function Post() {
  // Define PostHeader inline
  const PostHeader = () => {
    return (
      <div className="post-header flex w-full flex-row">
        <div className="flex basis-1/2 gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <span className="leading-[0.8] font-normal">Chloe Choi</span>
            <span className="font-lighter text-xs opacity-75">30 mins ago</span>
          </div>
        </div>
        <div className="flex basis-2/3 flex-row justify-end">
          <Badge
            className={
              "px- rounded-[20px] border-none bg-cyan-600 px-5 font-light text-white"
            }
            variant="outline">
            #Volunteer
          </Badge>
        </div>
      </div>
    );
  };

  return (
    <div className="m-4 h-fit rounded-[20px] border border-(--color-border) bg-white p-8">
      <PostHeader /> {/* Inline usage */}
      <div className="post-body">
        <h5 className="mt-6 mb-3 font-bold text-cyan-600">
          Make a Difference: Join Our School Volunteer Event!
        </h5>
        <span className="mt-3 mb-6 block leading-[1.5] font-light">
          Hey SAIT students! 🎉 Looking for a way to give back, gain valuable
          experience, and connect with amazing people? Join us for our
          upcoming event!
        </span>
        <div className="mb-2 flex flex-row items-center gap-x-2">
          <Calendar className="opacity-50" size={24}></Calendar>
          <span className="text-base font-light opacity-45">Feb 6, 2025 </span>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <Map className="opacity-50" size={24}></Map>
          <span className="text-base font-light opacity-45">Feb 6, 2025 </span>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Post;
