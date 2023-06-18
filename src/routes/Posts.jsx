import PostsList from "../components/posts-list.jsx";
import { json, Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <Outlet />
      <PostsList />
    </>
  );
};

export default Posts;

export const loader = async ({}) => {
  const response = await fetch("http://localhost:8080/posts");
  if (!response.ok) {
    throw json("Some error while fetching posts", { status: 500 });
  }
  return response;
};
