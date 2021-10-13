const SEND_MESSAGE = 'SEND_MESSAGE';

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
    ]
};

export const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let newMessage = { id: 7, message: action.newMessageBody };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };

        default:
            return state;
    }
};

export let sendNewMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});

export default dialogPageReducer;
