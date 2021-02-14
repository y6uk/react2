type AvatarType = {
    name: string,
    id: number
}

let initialState = {
    avatar: [
        { name: 'Igor', id: 1 },
        { name: 'Arnold', id: 2 },
        { name: 'John', id: 3 },
        { name: 'Donald', id: 4 }
    ] as Array<AvatarType>
};

export type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    return state
}

export default sidebarReducer;