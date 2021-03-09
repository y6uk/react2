import { profileAPI, usersAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import exp from 'constants'
import {
  ProfileType,
  PostsType,
  ContactsType,
  PhotosType,
} from '../types/types'
import { Dispatch } from 'redux'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
  posts: [
    { message: 'hello vasya', like: 1555, id: 1 },
    { message: 'hello petya', like: 20, id: 2 },
    { message: 'hello john', like: 59, id: 3 },
    { message: 'hello george', like: 18, id: 4 },
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: '',
}

export type InitialStateType = typeof initialState

const profileReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        like: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      }
    }
    default:
      return state
  }
}

type ActionsTypes =
  | AddPostActionCreatorActionType
  | SetUserProfileActionType
  | DeletePostActionType
  | SavePhoteActionType
  | SetStatusActionType

type AddPostActionCreatorActionType = {
  type: typeof ADD_POST
  newPostText: string
}

export const addPostActionCreator = (
  newPostText: string
): AddPostActionCreatorActionType => {
  return {
    type: ADD_POST,
    newPostText,
  }
}
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}

export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
})

type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({
  type: DELETE_POST,
  postId,
})

type SavePhoteActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhoteActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
})

type DispatchType = Dispatch<ActionsTypes>

export const getUserProfile = (userId: number) => async (
  dispatch: DispatchType
) => {
  let response = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: number) => async (dispatch: DispatchType) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (
  dispatch: DispatchType
) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType) => async (
  dispatch: any,
  getState: any
) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }))
    return Promise.reject(response.data.messages[0])
  }
}

export default profileReducer
