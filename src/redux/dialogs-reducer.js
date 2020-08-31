const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs:
        [
            {id: 1, name: 'Igor'},
            {id: 2, name: 'Yana'},
            {id: 3, name: 'John'},
            {id: 4, name: 'Donald'}
        ],
    messages:
        [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Yooo man'},
            {id: 4, message: 'priv'}
        ],
    newMessageText: 'MESSAGE!!'

};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newText = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: newText}]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state
    }
}

export const addMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export const onMessageChangeActionCreator = (text1) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: text1
    }
}

export default dialogsReducer;