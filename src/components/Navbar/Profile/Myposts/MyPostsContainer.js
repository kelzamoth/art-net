import React from 'react';
import { connect } from 'react-redux';
import { addNewPost, uppdateNewPostText } from '../../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addNewPost());
        },
        uppdateNewPostText: (text) => {
            let action = uppdateNewPostText(text);
            dispatch(action)
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;