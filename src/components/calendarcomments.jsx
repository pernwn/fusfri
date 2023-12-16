//lavet af Rina

import { useState } from "react";

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
    <div>
      <textarea value={comment} onChange={handleCommentChange} />
      <button onClick={handleSaveComment}>Add Comment</button>
    </div>
  );
};

export default CommentSection;
