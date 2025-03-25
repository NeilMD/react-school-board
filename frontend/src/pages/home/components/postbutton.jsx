import React from "react";
import { PlusSquare } from "lucide-react";

const PostButton = () => {
  return (
    <div>
      <button className="flex h-[40px] w-[100px] items-center justify-center gap-1 rounded-[20px] bg-sky-600 p-2 text-[1rem] font-medium text-[#ffffff] shadow-sm">
        <PlusSquare className="h-6 w-6 text-[1rem] text-[#ffffff]" />
        POST
      </button>
    </div>
  );
};

export default PostButton;
