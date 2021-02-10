import { LOGGED_USER, SET_USERLIST } from "./constants";

export const userReducer = (
  state = { userList: [], loggedUser: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USERLIST:
      return { ...state, userList: payload };
    case LOGGED_USER:
      return { ...state, loggedUser: payload };
    default:
      return state;
  }
};
