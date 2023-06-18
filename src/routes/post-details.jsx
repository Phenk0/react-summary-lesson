import { useLoaderData, Link, json } from "react-router-dom";

import Modal from "../components/modal";
import classes from "./post-details.module.css";

function PostDetails() {
  const { post } = useLoaderData();
  console.log(post);

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export const loader = async ({ params }) => {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  if (!response.ok) {
    throw json("Fetching details  go wrong...", { status: 500 });
  }
  return response;
};
