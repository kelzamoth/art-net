import React from 'react';
import {connect} from 'react-redux';
import {addNewMessage, uppdateNewMessageText} from '../../../redux/dialogPageReducer';
import Dialogs from './Dialogs';
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {

    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newTextMessage: state.dialogPage.newTextMessage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessage())
        },
        uppdateNewMessageText: (text) => {
            let action = uppdateNewMessageText(text);
            dispatch(action);
        }
    }
};


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);

