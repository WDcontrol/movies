import { WATCHED_INIT } from '../actions/WatchedAction';
import { FAVORITES_INIT } from '../actions/FavoritesAction';
const INITIAL_STATE = {
    watched: [],
    favorites:[],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WATCHED_INIT:
            return { watched: action.payload };
        case FAVORITES_INIT:
            return { favorites: action.payload }
    }
    return state;
}
