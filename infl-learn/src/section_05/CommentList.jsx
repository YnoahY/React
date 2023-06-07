import React from "react";
import Comment from "./Comment";

const comments = [
  { name: "폼폼푸린", comment: "폼폼푸린 귀여워" },
  { name: "쿠로미", comment: "쿠로미 귀여워" },
  { name: "시나모롤", comment: "시나모롤 귀여워" },
];

const CommentList = (props) => {
  return (
    <div>
      <br />
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
      <br />
      <hr />
    </div>
  );
};

export default CommentList;
