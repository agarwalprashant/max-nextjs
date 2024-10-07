import Postlist from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  function handlePostLists(post) {
    setPosts((prevPosts) => [post, ...prevPosts]);
  }

  function openModalHandler() {
    setIsModalOpen(true);
  }

  function closeModalHandler() {
    setIsModalOpen(false);
  }

  return (
    <>
      <MainHeader onCreatePost={openModalHandler} />
      <main>
        <Postlist
          isPosting={isModalOpen}
          onStopPosting={closeModalHandler}
          posts={posts}
          handlePostLists={handlePostLists}
        />
      </main>
    </>
  );
}

export default App;
