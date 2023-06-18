import PostsList from "./components/posts-list.jsx";
import MainHeader from "./components/main-header.jsx";
import { useState } from "react";

function App() {
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
        <PostsList
          isPosting={isPosting}
          onHideNewPostForm={hideNewPostFormHandler}
        />
      </main>
    </>
  );
}

export default App;
