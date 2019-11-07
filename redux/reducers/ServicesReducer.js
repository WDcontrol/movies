import TMDBService from "../../services/tmdb-service";

const INITIAL_STATE = {
    tmdbService: new TMDBService()
};

export default (state = INITIAL_STATE, action) => {
    return state;
};
