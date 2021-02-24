import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://wallpaperaccess.com/full/1940067.jpg" alt="" />
      </div>
      <div>
        ava + description
        </div>
      <MyPosts />
    </div>
  )
}

export default Profile;