import React,  {useState} from "react";
import "./PostForm.css";

function PostForm({ onPost, user}){
const [text, setText] =useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    if(!text.trim()) return;

    onPost ({
        name:user.name,
        avatar: user.profile.picture,
        message: text,
        likes: 20,
        comments: 18,
    });
    setText("");
};

return (
    <form className="postForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="What's on your mind?"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;