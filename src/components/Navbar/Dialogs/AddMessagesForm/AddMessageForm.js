import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../../Utilities/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder='Enter text...' validate={[required, maxLength50]}/>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);