import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type initialStateType = {
    initialize: boolean
}

let initialState: initialStateType = {
    initialize: false
};

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialize: true
            }
        default:
            return state
    }
}

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS // 'INITIALIZED_SUCCESS'
}

export const initializedSuccess = ():initializedSuccessActionType  => {
    return {
        type: INITIALIZED_SUCCESS
    }
}
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
        promise.then(() => {
            dispatch(initializedSuccess())
        })

}
export default appReducer