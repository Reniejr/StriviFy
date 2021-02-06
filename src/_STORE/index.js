import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { spotifyReducer } from './Spotify/reducers'
import { userReducer } from './User/reducer'
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  spotify: spotifyReducer,
  user: userReducer
});

export default createStore(
  rootReducer,
  composedEnhancer(applyMiddleware(thunk))
);