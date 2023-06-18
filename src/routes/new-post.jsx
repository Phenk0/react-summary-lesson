import { Form, json, Link, redirect, useActionData } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Modal from "../components/modal.jsx";

import classes from "./new-post.module.css";

function NewPost() {
  return (
    <Modal>
      <Form method="POST" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="body" autoFocus />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." relative="path">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export const action = async ({ request }) => {
  const formData = await request.formData();

  const postData = {
    ...Object.fromEntries(formData),
    id: uuid(),
  };

  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw json("Posting error!", { status: 500 });
  }
  return redirect("..");
};
