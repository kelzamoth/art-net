import React from 'react';
import { addNewPost, uppdateNewPostText } from '../../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addNewPost());
    }

    let newPostChange = (text) => {
        let action = uppdateNewPostText(text);
        props.store.dispatch(action);
    };

    return ( <MyPosts uppdateNewPostText={ newPostChange } 
        addPost={addPost} 
        profilePage={state.profilePage}
        newPostText={state.profilePage.newPostText} /> )
}

export default MyPostsContainer;