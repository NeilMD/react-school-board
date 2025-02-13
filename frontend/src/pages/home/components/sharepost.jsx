import { Calendar, Image, MapPin, AtSign } from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SharePost() {
  // temp user for testing -- will need to fetch json for users later
  const user = {
    id: 1,
    name: "Chloe",
    avatar: "https://avatar.com",
  };

  // manages the state of the post
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem("posts")) || []; // will be passed into the local storage for now since no db
  });
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts)); // saves post into the local storage for now
  }, [posts]);

  // creates new post and resets the states back to the original state
  const handlePostSubmit = () => {
    if (!content.trim()) return;

    const newPost = {
      id: Date.now(),
      userId: user.id,
      userName: user.name,
      userAvatar: user.avatar,
      title,
      content,
      image,
      location,
      date,
      timestamp: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setContent("");
    setTitle("");
    setTags("");
    setImage(null);
    setLocation("");
    setDate("");
    setDialogOpen(false);
  };

  return (
    <div className="home-card main-share-post-container flex cursor-pointer flex-col space-y-2 p-4">
      <div className="flex w-full items-center space-x-4">
        {/* All of the buttons open up the dialog box */}
        {/* Text Area for share a post*/}
        <textarea
          className="transition-default w-[92%] resize-none rounded-xl bg-gray-100 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Share a post in this group"
          rows="1"
          style={{ minHeight: "40px" }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* Button for share a post */}
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-(--academix-blue) font-semibold text-black"
          onClick={() => setDialogOpen(true)}>
          <span className="text-2xl font-extralight">+</span>
        </button>
      </div>

      <div className="flex items-center gap-x-2 space-x-1">
        {/* Image Icon */}
        <div
          className="hover-effect image-icon transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2"
          onClick={() => setDialogOpen(true)}>
          <Image className="text-gray-500" />
          <span className="text-gray-600">Image</span>
        </div>

        {/* Calendar Icon */}
        <div
          className="hover-effect calendar-icon hover-effect transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2"
          onClick={() => setDialogOpen(true)}>
          <Calendar className="text-gray-500" />
          <span className="text-gray-600">Calendar</span>
        </div>

        {/* Location Icon */}
        <div
          className="hover-effect location-icon hover-effect transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2"
          onClick={() => setDialogOpen(true)}>
          <MapPin className="text-gray-500" />
          <span className="text-gray-600">Location</span>
        </div>

        {/* Mention Icon */}
        <div
          className="hover-effect location-icon hover-effect transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2"
          onClick={() => setDialogOpen(true)}>
          <AtSign className="text-gray-500" />
          <span className="text-gray-600">Mention</span>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <button></button>
        </DialogTrigger>
        <DialogContent className="w-[900px] max-w-full overflow-y-auto rounded-xl bg-white p-4">
          <DialogHeader>
            <DialogTitle className="mt-3 ml-3 font-bold text-blue-400">
              Share a post
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Select Category Section */}
            <div className="ml-3 flex items-center">
              <label
                htmlFor="category"
                className="mr-2 font-bold text-blue-400">
                Category:
              </label>
              <select id="category" className="text-blue-400">
                <option value="volunteer">Volunteer</option>
                <option value="school">School</option>
              </select>
            </div>

            {/* Title Section */}
            <div>
              <input
                type="text"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="ml-3 w-[95%] rounded-xl bg-gray-100 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Content Section */}
            <div>
              <textarea
                className="ml-3 w-[95%] resize-none rounded-xl bg-gray-100 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                className="ml-3 w-[47%] rounded-xl bg-gray-100 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Buttons for Image, Calendar, Location, Mention, and Post */}
          <div className="flex items-center gap-4">
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
