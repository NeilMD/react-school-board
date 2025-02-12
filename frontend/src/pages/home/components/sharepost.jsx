import { Calendar, Image, MapPin } from "lucide-react";
import * as React from "react";

export function SharePost() {
  return (
    <div className="home-card main-share-post-container flex cursor-pointer flex-col space-y-2 p-4">
      <div className="flex w-full items-center space-x-4">
        {/* Text Area */}
        <textarea
          className="transition-default w-[92%] resize-none rounded-xl bg-gray-100 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Share a post in this group"
          rows="1"
          style={{ minHeight: "40px" }}
        />

        {/* Submit Button */}
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-(--academix-blue) font-semibold text-black">
          <span className="text-2xl font-extralight">+</span>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-x-2 space-x-1">
        {/* Image Icon */}
        <div className="hover-effect image-icon transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2">
          <Image className="text-gray-500" />
          <span className="text-gray-600">Image</span>
        </div>

        {/* Calendar Icon */}
        <div className="hover-effect calendar-icon hover-effect transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2">
          <Calendar className="text-gray-500" />
          <span className="text-gray-600">Calendar</span>
        </div>

        {/* Location Icon */}
        <div className="hover-effect location-icon hover-effect transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2">
          <MapPin className="text-gray-500" />
          <span className="text-gray-600">Location</span>
        </div>
      </div>
    </div>
  );
}
