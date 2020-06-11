import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {

    let postData = [
        {id: 1, message: 'hello vasya', like: '1555'},
        {id: 2, message: 'hello petya', like: '20'},
        {id: 3, message: 'hello john', like: '59'},
        {id: 4, message: 'hello george', like: '18'}
    ]

    return (
        <div className={s.allPosts}>
            <div>
                <h3>my posts</h3>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} like={postData[0].like}/>
                <Post message={postData[1].message} like={postData[1].like}/>
                <Post message={postData[2].message} like={postData[2].like}/>
                <Post message={postData[3].message} like={postData[3].like}/>
            </div>
        </div>
    )
};


export default Myposts;