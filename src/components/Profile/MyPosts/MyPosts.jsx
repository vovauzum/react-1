import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likeCounts: "20" },
    { id: 2, message: "It's my first post", likeCounts: "30" }
  ]

  let postsElements = posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} />);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;