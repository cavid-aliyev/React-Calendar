import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({});

export const store = createStore(rootReducer, applyMiddleware(thunk));


export type RootState = ReturnType<typeof store.getState>;
//dispatch type
export type AppDispatch = typeof store.dispatch;
