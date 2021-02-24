import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hi, how are you?" like_count="20"/>
      <Post message="It's my first post" like_count="30"/>
    </div>
  )
}

export default MyPosts;