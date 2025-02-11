import React from "react";
import Post from "./components/post";
import Sidebar from "./components/sidebar";
import NavHeader from "./components/navheader";
import CalendarSideBar from "./components/calendarsidebar";
import { SharePost } from "@/pages/home/components/sharepost";

function Home() {
  return (
    <div className="flex h-fit min-h-full flex-col bg-(--color-home)">
      <header>
        <NavHeader />
      </header>
      <main className="mt-8 flex grow flex-row gap-4">
        <div className="max-w-[282px] basis-1/4">
          <Sidebar />
        </div>
        <div className="flex basis-4/6 flex-col">
          <SharePost></SharePost>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="basis-1/4">
          <CalendarSideBar />
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default Home;
