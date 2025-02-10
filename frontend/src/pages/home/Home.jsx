import React from "react";
import Post from "./post/Post";

function Home() {
  return (
    <div className="flex h-full flex-col bg-(--color-home)">
      <header>header</header>
      <main className="flex grow flex-row gap-8">
        <div className="basis-1/4">Left Sidebar</div>
        <div className="flex basis-4/6 flex-col">
          <Post />
          <Post />
        </div>
        <div className="basis-1/4">Right Sidebar</div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default Home;
