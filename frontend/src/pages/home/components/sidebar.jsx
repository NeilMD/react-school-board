import { GraduationCap } from "lucide-react";
import { Settings } from "lucide-react";
import { Calendar } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { HomeIcon } from "lucide-react";
import React from "react";

function Sidebar() {
  return (
    <div className="home-card mx-0 w-[260px] px-6 pt-4 pb-8">
      <ul id="sidebar-list" className="font-base text-text-base uppercase">
        <li className="active-nav">
          <HomeIcon></HomeIcon>
          <span>Home</span>
        </li>
        <li>
          <GraduationCap></GraduationCap>
          <span>Course</span>
        </li>
        <li>
          <LayoutGrid></LayoutGrid>
          <span>Community</span>
        </li>
        <li>
          <Calendar></Calendar>
          <span>Event</span>
        </li>
        <li>
          <Settings></Settings>
          <span>Setting</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
