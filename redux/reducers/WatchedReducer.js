import { WATCHED_INIT } from "../actions/WatchedAction";

const INITIAL_STATE = {
  watched: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WATCHED_INIT:
      return { watched: action.payload };
  }
  return state;
};
