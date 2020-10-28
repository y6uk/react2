import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem'
import Message from './Message/MessageItem';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
//import {maxLengthCreator} from "../../utils/validators/validators";
import {required, maxLengthCreator } from "../../utils/validators/validators"


const Dialogs = (props) => {
    //let state = props.dialogsPage;
    let state = props.dialogsReducer;

    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageText = props.newMessageText;

    let newMessageElement = React.createRef();

    let addNewMessage = (values) => {
        props.addMessageAction(values.newMessageText)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   validate={[required, maxLength50]}
                   name={"newMessageText"}
                   placeholder={"Enter you message"}/>
        </div>
        <div><button>send22</button></div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;