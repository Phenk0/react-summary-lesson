import Post from "./post.jsx";
import NewPost from "./new-post.jsx";
import Modal from "./modal.jsx";

import classes from "./posts-list.module.css";
import { useEffect, useState } from "react";

const PostsList = ({ isPosting, onHideNewPostForm }) => {
  const [posts, setPosts] = useState([]);
  const [isFetchPosting, setIsFetchPosting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  console.log("isFetching", isFetching);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      if (!response.ok) {
        throw new Error("Some error while fetching posts");
      }
      const data = await response.json();
      const fetchedPosts = data.posts;
      setPosts(fetchedPosts);
      setIsFetching(false);
    };
    fetchPosts().catch((e) => {
      console.log(e);
    });
  }, [isFetchPosting]);
  const addPostHandler = async (newPost) => {
    setIsFetchPosting(true);
    const response = await fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    if (!response.ok) {
      throw new Error("Posting error!");
    }
    setIsFetchPosting(false);
  };
  return (
    <>
      {isPosting && (
        <Modal onCloseModal={onHideNewPostForm}>
          <NewPost onCancel={onHideNewPostForm} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.length > 0 &&
          posts.map(({ author, body, id }) => (
            <Post author={author} body={body} key={id} />
          ))}
      </ul>
      {!posts.length && !isFetching && (
        <h1 style={{ textAlign: "center" }}>No Pain No Gain</h1>
      )}
      {isFetching && <h1 style={{ textAlign: "center" }}>Loading posts...</h1>}
    </>
  );
};
export default PostsList;
