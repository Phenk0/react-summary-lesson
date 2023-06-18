import { useLoaderData } from "react-router-dom";

import Post from "./post.jsx";

import classes from "./posts-list.module.css";

const PostsList = () => {
  const data = useLoaderData();
  const fetchedPosts = data.posts;

  return (
    <>
      <ul className={classes.posts}>
        {fetchedPosts.length > 0 &&
          fetchedPosts.map(({ author, body, id }) => (
            <Post author={author} body={body} key={id} id={id} />
          ))}
      </ul>
      {!fetchedPosts.length && (
        <h1 style={{ textAlign: "center" }}>No Pain No Gain</h1>
      )}
    </>
  );
};
export default PostsList;
