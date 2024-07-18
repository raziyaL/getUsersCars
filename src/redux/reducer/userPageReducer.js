import {types } from "../types"
const initialState = {
    users:[],
    usersIdState: null
}
export default function userPageReducer(state=initialState, action){
    switch (action.type){
        case types.USERS:
            return{...state, users: action.payload}
        case types.USERS_ID:
            return{...state, userIdState: action.payload}
        default:return state
    }
}