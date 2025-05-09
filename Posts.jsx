import React from "react";
import "./Posts.css";

function Posts({post}){
    return(
        <div className="post">
            <div className="post_Header">
                <img src={post.avatar}alt="avatar" />
                <h1>{post.name}</h1>
            </div>

            <p>{posts.message}</p>
            <div className="post_footer">
                <button> {post.likes}</button>
                <button> {posts.comment}</button>
            </div>
        </div>
    );
}

export default Posts;
