import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div className={s.background}>
                <img src="https://wallpaperaccess.com/full/1940067.jpg" alt="" />
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={"ds"}/>
            </div>
        </div>
    )
}

export default ProfileInfo;