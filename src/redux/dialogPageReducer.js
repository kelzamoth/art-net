const ADD_MESSAGE = 'ADD_MESSAGE';
const UPP_NEW_MESSAGE_TEXT = 'UPP_NEW_MESSAGE_TEXT';

let initialState = {dialogs: [
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
};

export const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = { id: 7, message: state.newTextMessage };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newTextMessage: ''
            };

        case UPP_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newTextMessage: action.newTextUpdate
            };
        default:
            return state;
    }
};

export let addNewMessage = () => ({ type: ADD_MESSAGE });
export let uppdateNewMessageText = (text) => ({ type: UPP_NEW_MESSAGE_TEXT, newTextUpdate: text });

export default dialogPageReducer;
