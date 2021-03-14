import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} 
            validate={[required]}
            name={"login"} 
            component={Input}/>
        </div>
        <div>
            <Field 
            validate={[required]}
            placeholder={"Password"} 
            name={"password"} 
            component={Input}/>
        </div>
        <div>
            <Field component={Input} type={"checkbox"} name={"rememberMe"} />Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: "login"}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {

    }
    return <div>
        <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;