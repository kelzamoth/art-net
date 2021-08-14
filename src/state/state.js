import picture from '../img/cat.jpg';
import pictureTwo from '../img/ghul.png';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, img: picture, message: 'Hi, how are you?', likeCount: 12 },
                { id: 2, img: pictureTwo, message: 'This is my first post', likeCount: 31 },
                { id: 3, img: picture, message: 'Hello, Sunny, lets go to the walk', likeCount: 42 },
                { id: 4, img: pictureTwo, message: 'I was made a very good dinner', likeCount: 9 },
                { id: 5, img: picture, message: 'My scars is really hurts', likeCount: 14 },
                { id: 6, img: pictureTwo, message: 'I cannot stand this f@#$@ng ass itch', likeCount: 88 },
            ],
            newPostText: ''
        },

        dialogPage: {
            dialogs: [
                { id: 1, name: 'Konstantinusail' },
                { id: 2, name: 'Victorasgul' },
                { id: 3, name: 'Margaram' },
                { id: 4, name: 'Tiffomoth' },
                { id: 5, name: 'Anasakz' },
                { id: 6, name: 'Berzivool' },
                { id: 7, name: 'Kelizar' },
                { id: 8, name: 'Barzazoth' }
            ],

            messages: [
                { id: 1, message: 'Hi, how are you?' },
                { id: 2, message: 'I want to meet you' },
                { id: 3, message: 'How about kill some ghuls?' },
                { id: 4, message: 'How about kill some ghuls?' },
                { id: 5, message: 'I want to meet you' },
                { id: 6, message: 'Hi, how are you?' },
                { id: 7, message: 'I want to meet you' }
            ]
        },
    },

    _callSubscriber() {
        console.log('state')
    },

    getState() {
        return this._state;
    },

    subscrider(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = { id: 9, img: picture, message: this._state.profilePage.newPostText, likeCount: 0 }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._getState);
    },

    uppdateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._getState);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = { id: 9, img: picture, message: this._state.profilePage.newPostText, likeCount: 0 }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._getState);
        }
        else if (action.type === 'UPP-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._getState);
        }
    }
};


window.store = store;


export default store;
