import preloader from "../../../assets/images/preloader.gif";
import React from "react";
import s from './preloader.module.css'

let Preloader = (props) => {
    return <div>
        <img src={preloader} className={s.pre} />
    </div>

}

export default Preloader