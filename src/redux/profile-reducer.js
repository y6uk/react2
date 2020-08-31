const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts:
        [
            {message: 'hello vasya', like: '1555', id: 1},
            {message: 'hello petya', like: '20', id: 2},
            {message: 'hello john', like: '59', id: 3},
            {message: 'hello george', like: '18', id: 4},
        ],
    newPostText: 'testim',
    profile: null

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
            }
        default:
            return state
    }


}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const onPostChangeActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export default profileReducer;