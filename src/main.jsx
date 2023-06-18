import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postLoader } from "./routes/Posts.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPost, { action as newPostAction } from "./routes/new-post.jsx";
import Layout from "./routes/layout.jsx";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/post-details.jsx";
import Modal from "./components/modal.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: (
      <Modal>
        <h2>Uncaught error!</h2>
      </Modal>
    ),
    children: [
      {
        path: "",
        Component: Posts,
        loader: postLoader,
        children: [
          { path: "new-post", Component: NewPost, action: newPostAction },
          { path: ":id", Component: PostDetails, loader: postDetailsLoader },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
