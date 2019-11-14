import { FAVORITES_INIT } from "../actions/FavoritesAction";
const INITIAL_STATE = {
  favorites: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAVORITES_INIT:
      return { favorites: action.payload };
  }
  return state;
};
