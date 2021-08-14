import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import s from './Dialogs.module.css'

const Dialogs = (props) => {

    let dialogItems = props.dialogPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
    let messageItem = props.dialogPage.messages.map(message => <MessageItem message={message.message} id={message.id} />)
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogItems}
            </div>
            <div className={s.messageItem}>
                {messageItem}
            </div>
        </div>
    )
}

export default Dialogs;

