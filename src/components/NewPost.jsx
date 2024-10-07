import classes from "./NewPost.module.css";
import { useState } from "react";
function NewPost({ handlePostLists, onStopPosting }) {
  const [author, setAuthor] = useState("dan");
  const [body, setBody] = useState("dan is good");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      author,
      body,
    };
    handlePostLists(newPost);
    onStopPosting();
  };

  function bodyChangeHandler(event) {
    setBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthor(event.target.value);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>

        <textarea
          id="body"
          required
          rows={3}
          name="post-body"
          onChange={bodyChangeHandler}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          name="post-author"
          onChange={authorChangeHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onStopPosting}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
