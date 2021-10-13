import React from 'react';
import { connect } from 'react-redux';
import { addNewPost, uppdateNewPostText } from '../../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (postText) => {
            dispatch(addNewPost(postText));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;