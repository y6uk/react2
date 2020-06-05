import React from "react";
import s from './Posts.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.imgg} src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" />
            { props.message }
            <div><span>    Like { props.like }</span></div>
        </div>
    )
};


export default Post;