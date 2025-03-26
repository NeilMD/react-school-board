import React, { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";

const Comment = ({ commentObj }) => {
  // Use useRef to generate faker data only once and persist it across re-renders
  const commentDataRef = useRef({
    name: faker.person.fullName(),
    avatar: faker.image.personPortrait(),

    content: commentObj.content || faker.hacker.phrase(),
  });

  return (
    <div className="flex min-h-[100px] w-full font-thin">
      <div className="flex flex-1/10 flex-col items-center justify-center">
        <Avatar>
          <AvatarImage
            className="object-cover"
            src={commentDataRef.current.avatar}
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="my-3 h-full border-r-1 border-form"></div>
      </div>
      <div className="flex flex-9/10 flex-col">
        <div className="flex h-[40px] items-center font-light">
          {commentDataRef.current.name}
        </div>
        <div className="mt-2 flex min-h-[52px]">
          {commentDataRef.current.content}
        </div>
      </div>
    </div>
  );
};

export default Comment;
