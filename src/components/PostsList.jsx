import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import MainHeader from "./MainHeader";

function Postlist({ isPosting, onStopPosting, posts, handlePostLists }) {
  const handlePostListsLocal = (post) => {
    handlePostLists(post);
  };

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
            handlePostLists={handlePostListsLocal}
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
