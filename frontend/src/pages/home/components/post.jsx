import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageSquareTextIcon } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Calendar, Map, BookOpen, LibraryBig } from "lucide-react";
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
    title: postObj.title || faker.word.words({ count: { min: 5, max: 10 } }),
    location: `${faker.location.state()}, ${faker.location.country()}`,
    content: postObj.content || faker.lorem.paragraph(),
    tag: postObj?.tags[0] || faker.company.buzzNoun(),
    userDetails: generateRandomAcronym(),
  });

  function generateRandomAcronym() {
    const options = ["IDWD", "IDGD", "IDUX"];

    // Randomly select one acronym from the options array
    const randomAcronym = options[Math.floor(Math.random() * options.length)];

    return randomAcronym;
  }
  console.log(postObj.tags[0]);
  // Define PostHeader inline
  const PostHeader = ({ postObj }) => {
    return (
      <div className="post-header flex w-full flex-row">
        <div className="flex basis-1/2 gap-2">
          <Avatar className="h-[50px] w-[50px]">
            <AvatarImage
              className="aspect-square object-cover"
              src={postDataRef.current.avatar}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <span className="leading-[1] font-normal">
              {postDataRef.current.name}
            </span>
            <span className="font-lighter text-xs opacity-75">
              <span className="font-semibold text-sky-700">SADT </span>|{" "}
              {postDataRef.current.userDetails} | 4th Semester
            </span>
            <span className="text-xs font-light opacity-65">Apr 10, 2025</span>
          </div>
        </div>
        <div className="flex h-[50px] basis-2/3 flex-row items-baseline justify-end">
          <Badge
            className={
              "flex h-fit items-center rounded-[20px] border-none bg-cyan-600 px-4 py-2 text-center font-light text-white"
            }
            variant="outline">
            #{postDataRef.current.tag}
          </Badge>
        </div>
      </div>
    );
  };

  // Define PostBody inline
  const PostBody = ({ postObj }) => {
    return (
      <div className="post-body">
        <h5 className="mt-6 text-[20px] font-bold text-cyan-600 capitalize">
          {postDataRef.current.title}
        </h5>
        <span className="mb-6 block leading-[1.5] font-light whitespace-pre-wrap">
          {postDataRef.current.content}
        </span>
        <div className="flex">
          <div className="basis-1/2">
            {/* <span className="font-regular text-base underline opacity-65">
              Event Details
            </span> */}
            {/* <div className="mt-2 mb-2 flex flex-row items-center gap-x-2">
              <Calendar className="opacity-50" size={24}></Calendar>
              <span className="text-base font-light opacity-65">
                Feb 6, 2025
              </span>
            </div> */}
            <div className="mb-2 flex flex-row items-center gap-x-2">
              <Map className="opacity-50" size={24}></Map>
              <span className="text-base font-light opacity-65">
                {postDataRef.current.location}
              </span>
            </div>
          </div>
          {/* <div className="basis-1/2">
            <span className="font-regular text-base underline opacity-65">
              Course Details
            </span>
            <div className="mt-2 mb-2 flex flex-row items-center gap-x-2">
              <LibraryBig className="opacity-50" size={24}></LibraryBig>
              <span className="text-base font-light opacity-65">
                Interactive Design
              </span>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <BookOpen className="opacity-50" size={24}></BookOpen>
              <span className="text-base font-light opacity-65">CPRG-309</span>
            </div>
          </div> */}
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
