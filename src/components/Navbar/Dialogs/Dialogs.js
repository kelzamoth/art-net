import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import s from './Dialogs.module.css'
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {


    let dialogItems = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
    let messageItem = props.messages.map(message => <MessageItem message={message.message} id={message.id} />)
    let newUpdTextMessage = props.newTextMessage;
    
    let onSendMessageClick = () => {

        props.addNewMessage();
    }
    let onMessageChange =(event) => {
        let text = event.target.value;
        props.uppdateNewMessageText(text);
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogItems}
            </div>
            <div className={s.messageItem}>
                {messageItem}
            </div>
            <div>
                <textarea onChange={ onMessageChange } value={ newUpdTextMessage } placeholder='Enter text...' />
                <button onClick={ onSendMessageClick } >Send</button>
            </div>
        </div>
    )
}

export default Dialogs;

