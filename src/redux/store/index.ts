import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { modalActionsReducer } from "../modalActionsReducer";
import { movieListReducer } from "../movieListReducer";
import { movieReducer } from "../movieReducer";

const rootReducer = combineReducers({
    movie: movieReducer,
    list: movieListReducer,
    modal: modalActionsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))