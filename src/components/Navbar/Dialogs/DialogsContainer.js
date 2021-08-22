import React from 'react';
import { addNewMessage, uppdateNewMessageText } from '../../../redux/dialogPageReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
debugger
    let state = props.store.getState().dialogPage;

    let onSendMessageClick = () => {
        props.store.dispatch(addNewMessage());
    }
    let onMessageChange = (text) => {
        let action = uppdateNewMessageText(text);
        props.store.dispatch(action);
    };

    return (<Dialogs addNewMessage={onSendMessageClick} uppdateNewMessageText={onMessageChange} dialogPage={state} />)
}

export default DialogsContainer;

