import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import MainHeader from "./MainHeader";

function Postlist({ isPosting, onStopPosting }) {
  const [author, setAuthor] = useState("dan");
  const [body, setBody] = useState("dan is good");

  function bodyChangeHandler(event) {
    setBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onAuthorChange={authorChangeHandler}
            onBodyChange={bodyChangeHandler}
          />
        </Modal>
      )}
      <ul className={styles["posts"]}>
        <Post author={author} body={body} />
        <Post author={"author2"} body={"body2"} />
      </ul>
    </>
  );
}

export default Postlist;
