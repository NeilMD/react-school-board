import React from "react";
import Post from "./post/Post";
import Sidebar from "./sidebar/Sidebar";
import NavHeader from "./NavHeader/NavHeader";

function Home() {
  return (
    <div className="flex h-fit flex-col bg-(--color-home)">
      <header>
        <NavHeader />
      </header>
      <main className="mt-8 flex grow flex-row gap-4">
        <div className="max-w-[282px] basis-1/4">
          <Sidebar />
        </div>
        <div className="flex basis-4/6 flex-col">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        {/* <div className="basis-1/4">Right Sidebar</div> */}
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default Home;
