import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    const postElements = props.posts.map(post => <Post img={post.img} message={post.message} likeCount={post.likeCount} />);

    let onAddPost = (values) => {
        debugger;
            props.addNewPost(values.postText)
    };

    return (
        <div className={s.content}>
            <div><h3>My posts</h3>
                <div>
                    <MyPostFormRedux onSubmit={onAddPost} />
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    )
}

const MyPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'postText'} placeholder={'Enter text...'} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const MyPostFormRedux = reduxForm ({form: 'postTextAddForm'})(MyPostForm)



export default MyPosts;