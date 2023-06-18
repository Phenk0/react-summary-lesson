import classes from "./post.module.css";
import { Link } from "react-router-dom";
const Post = ({ id, author, body }) => {
  return (
    <Link to={id}>
      <li className={classes.post}>
        <p className={classes.author}>{author}</p>
        {body.split("\n").map((p, index) => (
          <p className={classes.text} key={index}>
            {p}
          </p>
        ))}
      </li>
    </Link>
  );
};
export default Post;
