import { useState } from "react";
import { v4 as uuid } from "uuid";

import classes from "./new-post.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const onChangeAreaHandler = (e) => {
    setEnteredBody(e.target.value);
  };
  const onAuthorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      author: enteredAuthor,
      body: enteredBody,
      id: uuid(),
    };
    console.log(postData);
    onAddPost(postData);
    onCancel();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={onChangeAreaHandler}
          value={enteredBody}
          autoFocus
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={onAuthorChangeHandler}
          value={enteredAuthor}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
