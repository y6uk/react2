import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator, } from "../../../utils/validators/validators"
import {Textarea} from "../../common/FormsControls/FormsControls";


const Myposts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like}/>);

    let onMyAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.allPosts}>
            <div>
                <h3>my posts</h3>
            </div>
            <MyPostFormRedux onSubmit={onMyAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

const maxLength10 = maxLengthCreator(10);

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newPostText"}
                       validate={[required, maxLength10]} />
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

const MyPostFormRedux = reduxForm({form: "profileMyPostForm"})(MyPostForm)

export default Myposts;