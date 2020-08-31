import React from "react";
import s from './AvaFriends.module.css';
import Friends from "../Friends";


const AvaFriends = (props) => {

    return (
        <div className={s.item}>

            <img className={s.imgg} src="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
            { props.name }
            <div>
                <span>id{ props.id }</span>
            </div>

        </div>
    )
};


export default AvaFriends;