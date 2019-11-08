import { createStore, combineReducers, applyMiddleware } from "redux";
import { ServicesReducer, FavoritesAndWatchedReducer } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    serviceReducer: ServicesReducer,
    favoritesAndWatchedReducer: FavoritesAndWatchedReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
