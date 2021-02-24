import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt="" />
            post 1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;