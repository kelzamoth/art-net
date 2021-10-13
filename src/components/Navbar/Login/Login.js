import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
debugger;
   return <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"Login"} name={'login'} component={'input'} />
         </div>
         <div>
            <Field placeholder={"Password"} name={'password'}  component={'input'} />
         </div>
         <div>
            <Field type={"checkbox"} name={'rememberMe'} component={'input'} />Remember Me
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