import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";

function Postlist() {
  const [author, setAuthor] = useState("dan");
  const [body, setBody] = useState("dan is good");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function bodyChangeHandler(event) {
    setBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthor(event.target.value);
  }

  function openModalHandler() {
    setIsModalOpen(true);
  }

  function closeModalHandler() {
    setIsModalOpen(false);
  }

  return (
    <>
      <button onClick={openModalHandler}>Add New Post</button>
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
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
