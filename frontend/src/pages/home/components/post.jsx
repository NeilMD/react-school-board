import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageSquareTextIcon } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Calendar, Map } from "lucide-react";
import Chloe from "@/assets/chloechoi.jpeg";
import React, { useState, useRef, useEffect } from "react";
import { faker } from "@faker-js/faker";
import CommentInput from "./commentinput";
import { motion } from "framer-motion";

function Post({ postObj }) {
  // Use useRef to generate faker data only once and persist it across re-renders
  const postDataRef = useRef({
    name: faker.person.fullName(),
    avatar: faker.image.personPortrait(),
    title: faker.word.words({ count: { min: 5, max: 10 } }),
    location: `${faker.location.state()}, ${faker.location.country()}`,
    content: faker.lorem.paragraph(),
  });

  // Define PostHeader inline
  const PostHeader = ({ postObj }) => {
    return (
      <div className="post-header flex w-full flex-row">
        <div className="flex basis-1/2 gap-2">
          <Avatar>
            <AvatarImage
              className="object-cover"
              src={postDataRef.current.avatar}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <span className="leading-[0.8] font-normal">
              {postDataRef.current.name}
            </span>
            <span className="font-lighter text-xs opacity-75">30 mins ago</span>
          </div>
        </div>
        <div className="flex basis-2/3 flex-row justify-end">
          <Badge
            className={
              "rounded-[20px] border-none bg-cyan-600 px-5 font-light text-white"
            }
            variant="outline">
            #Volunteer
          </Badge>
        </div>
      </div>
    );
  };

  // Define PostBody inline
  const PostBody = ({ postObj }) => {
    return (
      <div className="post-body">
        <h5 className="mt-6 mb-3 text-[20px] font-bold text-cyan-600 capitalize">
          {postDataRef.current.title}
        </h5>
        <span className="mt-3 mb-6 block leading-[1.5] font-light">
          {postDataRef.current.content}
        </span>
        <div className="mb-2 flex flex-row items-center gap-x-2">
          <Calendar className="opacity-50" size={24}></Calendar>
          <span className="text-base font-light opacity-65">Feb 6, 2025</span>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <Map className="opacity-50" size={24}></Map>
          <span className="text-base font-light opacity-65">
            {postDataRef.current.location}
          </span>
        </div>
      </div>
    );
  };

  const [isInputOpen, setIsInputOpen] = useState(false);
  // OnClick handler for toggling
  const handleCommentToggle = () => {
    setIsInputOpen(!isInputOpen);
  };
  const PostFooter = ({ postObj }) => {
    return (
      <div>
        <Separator className="mt-6" />
        <div className="columns-2 divide-gray-100 py-2 text-center text-gray-500">
          <div
            onClick={handleCommentToggle}
            className="hover-effect flex justify-center gap-2 rounded-md py-2">
            <MessageSquareTextIcon className="scale-x-[-1]" />
            Comment
          </div>
          <div className="hover-effect flex justify-center gap-2 rounded-md py-2">
            <Bookmark />
            Save
          </div>
        </div>
        <div className="max-h-dvh transition-all duration-500 ease-in-out">
          {isInputOpen && <CommentInput postId={postObj._id} />}
        </div>
      </div>
    );
  };

  return (
    <div className="home-card w-[800px]">
      <PostHeader postObj={postObj} /> {/* Inline usage of PostHeader */}
      <PostBody postObj={postObj} /> {/* Inline usage of PostBody */}
      <PostFooter postObj={postObj} />
    </div>
  );
}

export default Post;
