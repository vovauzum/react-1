import React from "react";
import s from "./Post.module.css";

type PropsType = {
    message: string
    likeCounts: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt=""/>
            {props.message}
            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>
    )
}

export default Post;