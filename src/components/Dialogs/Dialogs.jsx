import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem'
import Message from './Message/MessageItem';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {
    debugger
    //let state = props.dialogsPage;

    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageText = props.newMessageText;

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessageAction()
    }

    /*let onMessageChange = (e) => {
        let text1 = e.target.value;
        props.onMessageChangeAction(text1)

    }*/

    let onMessageChange = () => {
        let text1 = newMessageElement.current.value;
        props.onMessageChangeAction(text1)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange}
                              ref={newMessageElement}
                              value={props.newMessageText}/>
                </div>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;