import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { MessageSquareTextIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Cone } from "lucide-react";
import tryCatch from "@/utils/tryCatch";

const CommentInput = ({ postId }) => {
  const [content, setContent] = useState("");

  const handlePostSubmit = async () => {
    console.log("asd");
    if (!content.trim()) return;

    const newComment = {
      postId,
      userId: "605c3c2e69b1c82768f9a2b3", // You can change this if it's not always 'student'
      content,
    };

    setContent("");

    const [response, fetchError] = await tryCatch(async () => {
      const res = await fetch("http://localhost:5001/api/comment/add", {
        method: "POST", // Specify the HTTP method
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(newComment), // Convert requestData object to a JSON string
      });
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    });

    // setDialogOpen(false);
    console.log(newComment);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, maxHeight: 0 }}
        animate={{ opacity: 1, maxHeight: "3000px" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        <div className="my-3 flex w-full items-center">
          <div className="relative flex-9/10">
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              required
              className="text-input:font-light w-full rounded-md bg-gray-100 py-2 pr-4 pl-15 text-base placeholder:font-light focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
            <MessageSquareTextIcon className="absolute top-1/2 left-5 -translate-y-1/2 scale-x-[-1] text-gray-600" />
          </div>

          <div className="flex w-fit flex-1/10 justify-end">
            <div
              onClick={handlePostSubmit}
              className="ml-4 w-fit rounded-full bg-blue-300 p-2 transition-opacity duration-300 ease-in-out hover:opacity-75">
              <Plus className="text-gray-600" strokeWidth={2} size={16.5} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CommentInput;
