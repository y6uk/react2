import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const MessageItem = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
};



const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Yana'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Donald'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Yooo man'},
        {id: 4, message: 'priv'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name="Yana" id="2"/>
                <DialogItem name="John" id="3"/>
                <DialogItem name="Donald" id="4"/>
            </div>
            <div className={s.messages}>
                <MessageItem message={messagesData[0].message} id={messagesData[0].id}/>
                <MessageItem message={messagesData[1].message} id={messagesData[1].id}/>
                <MessageItem message="Yooo man"/>
                <MessageItem message="priv"/>
            </div>
        </div>
    )
};

export default Dialogs;