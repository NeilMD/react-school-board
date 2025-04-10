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
import { AnimatePresence, motion } from "framer-motion";
import { debounce } from "@/utils/debounce";

function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState(new Set());
  const [unfilteredPost, setUnfilteredPost] = useState();

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    fetchTags();
    fetchPosts();
  }, []);

  // Filter posts based on selected tags
  const handleTagFilter = debounce((selected) => {
    if (!selected || selected.size === 0) {
      setPosts(unfilteredPost); // show all if no tag selected
      return;
    }

    const selectedArray = Array.from(selected);

    const filtered = unfilteredPost.filter((post) =>
      post?.tags?.some((tag) => selectedArray.includes(tag)),
    );

    setPosts(filtered);
  }, 500); // 300ms debounce delay

  // Call this when tags are selected/unselected
  useEffect(() => {
    if (unfilteredPost) {
      handleTagFilter(selectedTags);
    }
  }, [selectedTags, unfilteredPost]);

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
      // Handle successful response
      setUnfilteredPost(resData.objData);

      setPosts(resData.objData); // Assuming objData contains the posts
    }
  };

  const fetchTags = async () => {
    // Fetch posts using the tryCatch wrapper
    const [response, fetchError] = await tryCatch(() =>
      fetch("http://localhost:5001/api/post/view/tags", {
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
      setTags(resData.objData); // Assuming objData contains the posts
    }
  };

  return (
    <div className="flex h-fit w-[99dvw] flex-col items-center justify-center overflow-x-hidden bg-(--color-home)">
      <div
        id="main"
        className="relative flex h-fit min-h-dvh max-w-[1515px] flex-col bg-(--color-home)">
        <header className="fixed top-0 z-50 w-full max-w-[1515px]">
          <NavHeader
            unfilteredPost={unfilteredPost}
            posts={posts}
            setPosts={setPosts}
          />
        </header>
        <SharePost
          posts={posts}
          setPosts={setPosts}
          open={isDialogOpen}
          onClose={handleDialogClose}
          unfilteredPost={unfilteredPost}
          setUnfilteredPost={setUnfilteredPost}
        />
        <main className="mx-10 mt-[114px] flex max-w-[1515px] min-w-[94dvw] grow flex-row gap-10 overflow-hidden">
          <div className="max-w-[282px] min-w-[260px] basis-1/10">
            <div className="fixed">
              <Sidebar />
            </div>
          </div>
          <div className="flex basis-[800px] flex-col items-center gap-y-5">
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-5">
                <TagDropdown
                  tags={tags}
                  setTags={setTags}
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                />
              </div>
              <PostButton onClick={handleDialogOpen} />
            </div>
            <div
              id="post-section"
              className="flex flex-col items-center gap-y-5">
              <AnimatePresence initial={true}>
                {posts && posts.length > 0 ? (
                  posts.map((post) => {
                    return (
                      <motion.div
                        key={post._id} // Move the key here
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}>
                        <Post postObj={post} />
                      </motion.div>
                    );
                  })
                ) : (
                  <></>
                )}
              </AnimatePresence>
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
    </div>
  );
}

export default Home;
