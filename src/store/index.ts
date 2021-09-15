import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {allReducers} from "./reducers";

const rootReducer = combineReducers(allReducers);

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;


//dispatch type for thunks
export type AppDispatch = typeof store.dispatch;
