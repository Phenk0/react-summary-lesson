import { Outlet } from "react-router-dom";
import MainHeader from "../components/main-header.jsx";
import { useState } from "react";

const Layout = () => {
  const [isPosting, setIsPosting] = useState(false);
  const showNewPostFormHandler = () => {
    setIsPosting(true);
  };
  const hideNewPostFormHandler = () => {
    setIsPosting(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showNewPostFormHandler} />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
