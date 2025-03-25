import { Calendar, Image, MapPin, AtSign } from "lucide-react";
import React, { useState, useEffect } from "react";
import tryCatch from "@/utils/tryCatch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SharePost({ open, onClose }) {
  // temp user for testing -- will need to fetch json for users later
  const user = {
    id: 1,
    name: "Chloe",
    avatar: "../../../assets/chloechoi.jpeg",
  };

  // manages the state of the post
  const [posts, setPosts] = useState(() => {
    return []; // will be passed into the local storage for now since no db
  });
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {}, [posts]);

  // creates new post and resets the states back to the original state
  const handlePostSubmit = async () => {
    if (!content.trim()) return;

    // const newPost = {
    //   id: Date.now(),
    //   userId: user.id,
    //   userName: user.name,
    //   userAvatar: user.avatar,
    //   title,
    //   content,
    //   image,
    //   location,
    //   date,
    //   timestamp: new Date().toLocaleString(),
    // };

    const newPost = {
      authorId: "60b8d2956f4d4b1d4c8b4567", // Assuming user.id corresponds to "authorId"
      authorType: "student", // You can change this if it's not always 'student'
      postType: "question", // Set postType as "question" by default, or adjust as necessary
      title, // Assuming the title is being passed as a variable
      content, // Assuming content is being passed as a variable
      tags: [], // You can replace this with an actual array of tags if you have them
      programs: [], // Replace with the array of programs if applicable
      courses: [], // Replace with the array of courses if applicable
    };

    setPosts([newPost, ...posts]);
    setContent("");
    setTitle("");
    setTags("");
    setImage(null);
    setLocation("");
    setDate("");

    const [response, fetchError] = await tryCatch(async () => {
      const res = await fetch("http://localhost:5001/api/post/add", {
        method: "POST", // Specify the HTTP method
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(newPost), // Convert requestData object to a JSON string
      });
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    });

    // setDialogOpen(false);
    console.log(newPost);
    onClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            onClose(); // Properly invoke the onClose function
          }
        }}>
        <DialogTrigger asChild>
          <button></button>
        </DialogTrigger>
        <DialogContent className="w-[900px] max-w-full overflow-y-auto rounded-xl bg-white p-4">
          <div className="grid gap-4 py-4">
            {/* Select Category Section */}
            <div className="ml-3 flex items-center text-form">
              <label htmlFor="category" className="mr-2 font-normal">
                Category:
              </label>
              <select id="category" className="font-light">
                <option value="volunteer">Volunteer</option>
                <option value="school">School</option>
              </select>
            </div>

            {/* Title Section */}
            <div className="w-full">
              <input
                type="text"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="text-thin mx-3 w-[98.5%] rounded-xl bg-gray-100 p-4 placeholder:font-light focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Content Section */}
            <div>
              <textarea
                className="mx-3 w-[98.5%] resize-none rounded-xl bg-gray-100 p-4 placeholder:font-light focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Share post in this group"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            {/* Tags Section */}
            <div>
              <input
                type="text"
                id="postTags"
                placeholder="Tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="ml-3 w-[47%] rounded-xl bg-gray-100 p-4 placeholder:font-light focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Buttons for Image, Calendar, Location, Mention, and Post */}
          <div className="flex justify-between gap-4 font-normal">
            <label
              htmlFor="fileInput"
              className="hover-effect location-icon hover-effect transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2">
              <Image className="text-gray-500" />
              <span className="text-gray-600">Image</span>
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />
            <button
              type="button"
              onClick={() => setDate(new Date().toISOString().split("T")[0])}
              className="hover-effect location-icon hover-effect transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2">
              <Calendar className="text-gray-500" />
              <span className="text-gray-600">Calendar</span>
            </button>
            <button
              type="button"
              onClick={() => setLocation(prompt("Enter location"))}
              className="hover-effect location-icon hover-effect transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2">
              <MapPin className="text-gray-500" />
              <span className="text-gray-600">Location</span>
            </button>
            <button
              type="button"
              onClick={() => setLocation(prompt("Tag someone"))}
              className="hover-effect mention-icon hover-effect transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2">
              <AtSign className="text-gray-500" />
              <span className="text-gray-600">Mention</span>
            </button>
            <button
              onClick={handlePostSubmit}
              className="ml-[200px] flex cursor-pointer items-center space-x-2 rounded-xl bg-(--academix-blue) px-4 py-2 text-black">
              Post
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
