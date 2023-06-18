import classes from "./post.module.css";
const Post = ({ author, body }) => {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      {body.split("\n").map((p, index) => (
        <p className={classes.text} key={index}>
          {p}
        </p>
      ))}
    </li>
  );
};
export default Post;
