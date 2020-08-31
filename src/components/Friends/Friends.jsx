import React from "react";
import s from './Friends.module.css';
import AvaFriends from "./AvaFriends/AvaFriends";


const Friends = (props) => {
   /* debugger;*/
    let avatar = [
        {name: 'Igor', id: 1},
        {name: 'Yana', id: 2},
        {name: 'John', id: 3},
        {name: 'Donald', id: 4}
    ]

    let avaElements = avatar.map(av => <AvaFriends name={av.name} id={av.id}/>);
    return (
        <div>
            <span className={s.pree}>Friends</span>
            <span>{ props.name }</span>

            <div className={s.posts}>
                { avaElements }
            </div>
        </div>
    )
};

export default Friends;