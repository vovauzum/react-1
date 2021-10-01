import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

type PropsType = {}

export type AddPostFormValuesType = {
    newPostText: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            {createField<AddPostFormValuesTypeKeys>("Post message", "newPostText", [required], Textarea)}
            <Field component={Textarea}
                   name={"newPostText"}
                   validate={[required, maxLength10]}
                   placeholder="Post message"/>
        </div>
        <button>Add post</button>
    </form>
}

export default reduxForm<AddPostFormValuesType, PropsType>({form: "profile-add-post"})(AddNewPostForm);