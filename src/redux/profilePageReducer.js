import picture from '../img/cat.jpg';
import pictureTwo from '../img/ghul.png';

const ADD_POST = 'ADD_POST';
const UPP_NEW_POST_TEXT = 'UPP_NEW_POST_TEXT';

let initialState =  {
    posts: [
        { id: 1, img: picture, message: 'Hi, how are you?', likeCount: 12 },
        { id: 2, img: pictureTwo, message: 'This is my first post', likeCount: 31 },
        { id: 3, img: picture, message: 'Hello, Sunny, lets go to the walk', likeCount: 42 },
        { id: 4, img: pictureTwo, message: 'I was made a very good dinner', likeCount: 9 },
        { id: 5, img: picture, message: 'My scars is really hurts', likeCount: 14 },
        { id: 6, img: pictureTwo, message: 'I cannot stand this f@#$@ng ass itch', likeCount: 88 },
    ],
    newPostText: ''
};


export const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 9, img: picture, message: state.newPostText, likeCount: 0 };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPP_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export let addNewPost = () => ({ type: ADD_POST });
export let uppdateNewPostText = (text) => ({ type: UPP_NEW_POST_TEXT, newText: text });

export default profilePageReducer;
