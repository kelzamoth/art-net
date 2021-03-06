import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../../Utilities/validators";
import {login} from "../../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from "../../common/FormsControl/FormsControl.module.css"

const LoginForm = (props) => {
   return (
       <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"Email"} name={'email'} component={Input} validate={[required]} element={'input'}/>
         </div>
         <div>
            <Field placeholder={"Password"} name={'password'}  component={Input} validate={[required]}/>
         </div>
         <div>
            <Field type={"checkbox"} name={'rememberMe'} component={Input}/>Remember Me
         </div>
           {props.error && <div className={styles.formSummuryError}>
               {props.error}
           </div>}
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe )
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
   return (
       <div>
      <h1>Log in</h1>
      <LoginReduxForm onSubmit={onSubmit} />
   </div>
   )
}

export default Login;



