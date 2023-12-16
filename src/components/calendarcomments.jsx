//lavet af Rina

import { useState } from "react";
import "../styles/rin.css"

const CommentSection = ({ eventId, onSaveComment }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSaveComment = () => {
    onSaveComment(eventId, comment);
    setComment("");
  };

  return (
    <div className="comment-container">
      <textarea className="comment-textbox" value={comment} onChange={handleCommentChange} />
      <button className="comment-button" onClick={handleSaveComment}>Add Comment</button>
    </div>
  );
  
};

export default CommentSection;
