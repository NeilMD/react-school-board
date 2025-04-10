import React from "react";
import { Plus } from "lucide-react";

const PostButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex h-[40px] w-[100px] cursor-pointer items-center justify-center gap-1 rounded-[20px] bg-sky-600 p-2 text-[1rem] font-medium font-normal text-[#ffffff] shadow-sm">
        <Plus className="h-6 w-6 text-[1rem] font-normal text-[#ffffff]" />
        POST
      </button>
    </div>
  );
};

export default PostButton;
