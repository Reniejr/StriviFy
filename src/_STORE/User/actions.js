import { SET_USERLIST, LOGGED_USER } from "./constants";

export const setUserList = (userList) => ({
  type: SET_USERLIST,
  payload: userList,
});

export const loggedUser = (user) => ({ type: LOGGED_USER, payload: user });
