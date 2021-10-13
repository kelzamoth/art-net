import React from 'react';
import {connect} from 'react-redux';
import {sendNewMessageCreator} from '../../../redux/dialogPageReducer';
import Dialogs from './Dialogs';
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {

    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: (newMessageBody) => {
            dispatch(sendNewMessageCreator(newMessageBody))
        }
    }
};


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);

