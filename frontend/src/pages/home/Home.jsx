import React from "react";
import Post from "./components/post";
import Sidebar from "./components/sidebar";
import NavHeader from "./components/navheader";
import CalendarSideBar from "./components/calendarsidebar";
import FormPost from "./components/formpost";
import { SharePost } from "@/pages/home/components/sharepost";
import { Separator } from "@/components/ui/separator";

function Home() {
  return (
    <div className="relative flex h-fit min-h-full max-w-[1440px] flex-col bg-(--color-home)">
      <header>
        <NavHeader />
      </header>
      <main className="mt-8 flex grow flex-row gap-4">
        <div className="max-w-[282px] basis-1/10">
          <Sidebar />
        </div>
        <div className="flex basis-8/10 flex-col">
          <SharePost></SharePost>

          <Separator className="mx-4 mt-4 mb-8 w-[unset] bg-(--academix-blue)" />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
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
