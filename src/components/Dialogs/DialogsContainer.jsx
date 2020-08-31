import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps =  (state) => {
    debugger;
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,
        newMessageText: state.dialogsReducer.newMessageText
    }
}
let mapDispatchToProps =  (dispatch) => {
    return {

        addMessageAction: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChangeAction: (text1) => {
            dispatch(onMessageChangeActionCreator(text1))
        }
    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;