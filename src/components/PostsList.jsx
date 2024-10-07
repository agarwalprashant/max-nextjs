import { useEffect, useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";

function Postlist({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log("get post:", data);
        setPosts(data.posts);
      });
  }, []);

  function handlePostLists(newPost) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post added:", data);
        // setPosts(data.posts);
        setPosts((prevPosts) => [data.post, ...prevPosts]);
      });
  }

  const renderPosts = () => {
    return posts.map(({ author, body }, index) => (
      <Post author={author} body={body} key={index} />
    ));
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            handlePostLists={handlePostLists}
            onStopPosting={onStopPosting}
          />
        </Modal>
      )}
      <ul className={styles["posts"]}>
        {posts.length != 0 ? renderPosts() : "No posts yet"}
      </ul>
    </>
  );
}

export default Postlist;
