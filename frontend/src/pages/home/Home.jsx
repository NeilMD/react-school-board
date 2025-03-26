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
import tryCatch from "@/utils/tryCatch";

function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [posts, setPosts] = useState();

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // Fetch posts using the tryCatch wrapper
    const [response, fetchError] = await tryCatch(() =>
      fetch("http://localhost:5001/api/post/view/all", {
        method: "GET", // Specify the HTTP method
      }),
    );

    const [resData, dataErr] = await tryCatch(() => response.json());

    if (fetchError) {
      // Handle error if fetch failed
      setError(fetchError);
      return;
    }

    if (response) {
      console.log(resData);
      // Handle successful response
      setPosts(resData.objData); // Assuming objData contains the posts
    }
  };

  return (
    <>
      <div
        id="main"
        className="relative flex h-fit min-h-full flex-col bg-(--color-home)">
        <header className="fixed top-0 z-50 w-full">
          <NavHeader />
        </header>
        <SharePost open={isDialogOpen} onClose={handleDialogClose} />
        <main className="mx-10 mt-[114px] flex grow flex-row gap-10">
          <div className="max-w-[282px] min-w-[260px] basis-1/10">
            <div className="fixed">
              <Sidebar />
            </div>
          </div>
          <div className="flex basis-8/10 flex-col items-center gap-y-5">
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-5">
                <TrendDropdown />
                <TagDropdown />
              </div>
              <PostButton onClick={handleDialogOpen} />
            </div>
            <div
              id="post-section"
              className="flex flex-col items-center gap-y-5">
              {posts && posts.length > 0 ? (
                posts.map((post) => <Post key={post._id} postObj={post} />)
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="max-w-[292px] min-w-[275px] basis-1/10">
            <div className="fixed">
              <CalendarSideBar />
            </div>
          </div>
        </main>
        <footer>footer</footer>
      </div>
    </>
  );
}

export default Home;
