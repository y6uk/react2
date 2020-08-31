import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar.reducer";

let store = {
    _state: {
        profilePage: {
            posts:
                [
                    {message: 'hello vasya', like: '1555', id: 1},
                    {message: 'hello petya', like: '20', id: 2},
                    {message: 'hello john', like: '59', id: 3},
                    {message: 'hello george', like: '18', id: 4},
                ],
            newPostText: 'testim'

        },
        dialogsPage: {
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
            newMessageText: 'testim MESSAGE!!'

        },
        sidebarrr: {
            avatar: [
                {name: 'Igor', id: 1},
                {name: 'Yana', id: 2},
                {name: 'John', id: 3},
                {name: 'Donald', id: 4}
            ]
        },
        avatar: [
            {name: 'Igor', id: 1},
            {name: 'Yana', id: 2},
            {name: 'John', id: 3},
            {name: 'Donald', id: 4}
        ]
    },
    _callSubscriber() {
        console.log('lol');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarrr = sidebarReducer(this._state.sidebarrr, action)

        this._callSubscriber(this._state);
    }
}

        /*if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }

    }
*/






        export default store;
        window.store = store;
