import { CREATE_USER } from './constants'

export const userReducer = (state = { userList: [] }, action) => {
    const { type, payload } = action
    switch (type) {
        case CREATE_USER:return{...state, userList:state.userList.concat(payload)}
        default: return state
    }
}