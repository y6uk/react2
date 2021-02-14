const ADD_MESSAGE = 'ADD_MESSAGE';

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

let initialState = {
    dialogs:
        [
            {id: 1, name: 'Igor'},
            {id: 2, name: 'Bill'},
            {id: 3, name: 'John'},
            {id: 4, name: 'Donald'}
        ] as Array<DialogsType>,
    messages:
        [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Yooo man'},
            {id: 4, message: 'priv'}
        ] as Array<MessagesType>
};

export type InitialStateType = typeof initialState


const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type AddMessageCreatorActionType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}

export const addMessageActionCreator = (newMessageText: string): AddMessageCreatorActionType => {
    return {
        type: 'ADD_MESSAGE',
        newMessageText
    }
}

export default dialogsReducer;