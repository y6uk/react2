const ADD_MESSAGE = 'ADD-MESSAGE';

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
        ]
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newText = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newText}]
            }
        }
        default:
            return state
    }
}

export const addMessageActionCreator = (newMessageText) => {
    return {
        type: 'ADD-MESSAGE',
        newMessageText
    }
}

export default dialogsReducer;