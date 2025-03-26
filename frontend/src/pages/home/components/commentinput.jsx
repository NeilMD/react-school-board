import React from "react";
import { Plus } from "lucide-react";
import { MessageSquareTextIcon } from "lucide-react";

const CommentInput = () => {
  return (
    <>
      <div className="my-3 flex w-full items-center">
        <div className="relative flex-9/10">
          <input
            type="text"
            id="title"
            placeholder="Title"
            onChange={(e) => {}}
            required
            className="text-input:font-light w-full rounded-md bg-gray-100 py-2 pr-4 pl-15 text-base placeholder:font-light focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
          <MessageSquareTextIcon className="absolute top-1/2 left-5 -translate-y-1/2 scale-x-[-1] text-gray-600" />
        </div>

        <div className="flex w-fit flex-1/10 justify-end">
          <div className="ml-4 w-fit rounded-full bg-blue-300 p-2 transition-shadow duration-300 ease-in-out hover:opacity-75">
            <Plus className="text-gray-600" strokeWidth={2} size={16.5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentInput;
