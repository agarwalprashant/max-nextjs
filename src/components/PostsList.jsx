import Post from "./Post";
import styles from "./PostsList.module.css";

function Postlist() {
  return (
    <ul className={styles["posts"]}>
      <Post author={"author1"} body={"body1"} />
      <Post author={"author2"} body={"body2"} />
    </ul>
  );
}

export default Postlist;
