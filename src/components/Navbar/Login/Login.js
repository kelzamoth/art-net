import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../../Utilities/validators";

const LoginForm = (props) => {
debugger;
   return <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"Login"} name={'login'} component={Input} validate={[required]} element={'input'}/>
         </div>
         <div>
            <Field placeholder={"Password"} name={'password'}  component={Input} validate={[required]}/>
         </div>
         <div>
            <Field type={"checkbox"} name={'rememberMe'} component={Input} validate={[required]}/>Remember Me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>

}

const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm)


let Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
   return <div>
      <h1>Log in</h1>
      <LoginReduxForm onSubmit={onSubmit} />

   </div>
}

export default Login;