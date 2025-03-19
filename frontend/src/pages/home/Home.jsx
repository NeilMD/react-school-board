import React from "react";
import Post from "./components/post";
import Sidebar from "./components/sidebar";
import NavHeader from "./components/navheader";
import CalendarSideBar from "./components/calendarsidebar";
import { SharePost } from "@/pages/home/components/sharepost";
import { Separator } from "@/components/ui/separator";
import {AddPostButton, DropdownButton, SearchableTagInput } from "@/pages/home/components/buttons";

function Home() {
  return (
    <div className="relative flex h-fit min-h-full flex-col bg-(--color-home)">
      <header>
        <NavHeader />
      </header>
      <main className="mt-8 flex grow flex-row gap-4">
        <div className="max-w-[282px] basis-1/10">
          <Sidebar />
        </div>
        <div className="flex basis-8/10 flex-col">
          <div className="flex justify-between">
            <div className="flex items-center gap-[10px]">
              <DropdownButton className="ml-[10px]" /> {/* Spacing not correct, needs alignment  */}
              <SearchableTagInput />
            </div>
            <AddPostButton></AddPostButton>
          </div>
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
