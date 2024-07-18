import {types} from "./types"

export function fetchUsersAction(){
    return async function(dispatch){
        const response =await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await response.json()
        dispatch(getUsersAction(data))
    }
}
function getUsersAction(users){
    return{
        type:types.USERS,
        payload:users
    }
}

function getUserId(user){
    return{
        type: types.USERS_ID,
        payload:user
    }
}

export function getIdAction(userId){
    return async function(dispatch){
        const response =await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const data= await response.json()
        dispatch(getUserId(data))
    }
}