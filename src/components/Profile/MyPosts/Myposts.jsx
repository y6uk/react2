import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = () => {
    return (
        <div>
            my posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <Post message='hello vasya' like='15'/>
                <Post message='hello petya' like='20'/>
                <Post message='hello igor' like='59'/>
                <Post message='hello john' like='28'/>
                <Post message='hello george' like='33'/>

            </div>
        </div>
    )
};


export default Myposts;