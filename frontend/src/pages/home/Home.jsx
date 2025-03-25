import React, { useState, useEffect } from "react";
import Post from "./components/post";
import Sidebar from "./components/sidebar";
import NavHeader from "./components/navheader";
import CalendarSideBar from "./components/calendarsidebar";
import FormPost from "./components/formpost";
import { SharePost } from "@/pages/home/components/sharepost";
import { Separator } from "@/components/ui/separator";
import postbutton from "./components/postbutton";
import PostButton from "./components/postbutton";
import TagDropdown from "./components/tagdropdown";
import TrendDropdown from "./components/trenddropdown";

function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="relative flex h-fit min-h-full flex-col bg-(--color-home)">
      <header className="fixed top-0 z-50 w-full">
        <NavHeader />
      </header>
      <main className="mx-10 mt-[114px] flex grow flex-row gap-10">
        <SharePost open={isDialogOpen} onClose={handleDialogClose} />
        <div className="max-w-[282px] basis-1/10">
          <Sidebar />
        </div>
        <div className="flex basis-8/10 flex-col items-center gap-y-5">
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-5">
              <TrendDropdown />
              <TagDropdown />
            </div>
            <PostButton onClick={handleDialogOpen} />
          </div>
          <div id="post-section" className="flex flex-col items-center gap-y-5">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className="basis-1/10">
          <CalendarSideBar />
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default Home;
