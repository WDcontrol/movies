import { createStore, combineReducers, applyMiddleware } from "redux";
import { ServicesReducer, FavoritesAndWatchedReducer } from "./reducers";
import thunk from "redux-thunk";
import WatchedReducer from "./reducers/WatchedReducer";

const rootReducer = combineReducers({
  serviceReducer: ServicesReducer,
  favoritesAndWatchedReducer: FavoritesAndWatchedReducer,
  watchedReducer: WatchedReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
