import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://wallpaperaccess.com/full/1940067.jpg" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
        </div>
        </div>
    )
}

export default ProfileInfo;