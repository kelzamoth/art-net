import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import s from './Dialogs.module.css'
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {sendNewMessage} from "../../../redux/dialogPageReducer";
import {AddMessageFormRedux} from "./AddMessagesForm/AddMessageForm";

const Dialogs = (props) => {

    let dialogItems = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
    let messageItem = props.messages.map(message => <MessageItem message={message.message} id={message.id} />)

    let addNewMessage = (values) => {
        props.sendNewMessage(values.newMessageBody);
    }


    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogItems}
            </div>
            <div className={s.messageItem}>
                {messageItem}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs;

