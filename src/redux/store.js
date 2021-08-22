import picture from '../img/cat.jpg';
import pictureTwo from '../img/ghul.png';
import dialogPageReducer from './dialogPageReducer';
import profilePageReducer from './profilePageReducer';


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
            ],
            newTextMessage: ''
        }
    },

    _callSubscriber() {
        console.log('state')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);
    }
};

export default store;
