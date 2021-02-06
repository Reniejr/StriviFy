import { CREATE_USER } from './constants'

export const createUser = (user) => ({type:CREATE_USER, payload:{username:user.username, password:user.password}})