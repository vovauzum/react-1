import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} 
            name={"newPostText"}
            validate={[required, maxLength10]}
            placeholder="Post message"/>
        </div>
        <button>Add post</button>
    </form>
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = React.memo(props => {
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})


export default MyPosts;