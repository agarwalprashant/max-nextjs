// import css module
import styles from "./Post.module.css";

function Post(props) {
  return (
    <li className={styles["post"]}>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </li>
  );
}

export default Post;
