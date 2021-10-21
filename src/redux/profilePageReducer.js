import picture from '../img/cat.jpg';
import pictureTwo from '../img/ghul.png';
import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, img: picture, message: 'Hi, how are you?', likeCount: 12 },
        { id: 2, img: pictureTwo, message: 'This is my first post', likeCount: 31 },
        { id: 3, img: picture, message: 'Hello, Sunny, lets go to the walk', likeCount: 42 },
        { id: 4, img: pictureTwo, message: 'I was made a very good dinner', likeCount: 9 },
        { id: 5, img: picture, message: 'My scars is really hurts', likeCount: 14 },
        { id: 6, img: pictureTwo, message: 'I cannot stand this f@#$@ng ass itch', likeCount: 88 },
    ],
    profile: null,
    status: ""
};


export const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 9, img: picture, message: action.postText, likeCount: 0 };
                return {
                    ...state,
                    posts: [...state.posts, newPost]
                }


        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
};

export const addNewPost = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({type: SET_STATUS, status });

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        });
    }
}
export const getStatus = (status) => {
    return (dispatch) => {
        profileAPI.getUserStatus(status).then(response => {
            dispatch(setUserStatus(response.data))
        });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        });
    }
}

export default profilePageReducer;
