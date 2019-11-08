import axios from 'axios';
const key = '0cb2b2ff71b28e5e89226d01b98cc3df';
const url = `https://api.themoviedb.org/3`;

class TMDBService {
  getTopRatedMovies() {
    return axios.get(`${url}/movie/top_rated?api_key=${key}&language=fr-FR`);
  }

  getUpcomingMovies() {
    return axios.get(
      `${url}/movie/upcoming?api_key=${key}&language=fr-FR&region=FR`
    );
  }

  getNowPlayingOnTheatherMovies() {
    return axios.get(
      `${url}/movie/now_playing?api_key=${key}&language=fr-FR&region=FR`
    );
  }

  getPopularMovies() {
    return axios.get(
      `${url}/movie/popular?api_key=${key}&language=fr-FR&region=FR`
    );
  }

  getPopularTvShow() {
    return axios.get(`${url}/tv/popular?api_key=${key}&language=fr-FR`);
  }

  getTopRatedTvShow() {
    return axios.get(`${url}/tv/top_rated?api_key=${key}&language=fr-FR`);
  }

  getPopularPeopleAndTheirMovies() {
    return axios.get(`${url}/person/popular?api_key=${key}&language=fr-FR`);
  }

  getMovieDetails(id) {
    return axios.get(
      `${url}/movie/${id}?api_key=${key}&language=fr-FR&append_to_response=credits,videos`
    );
  }

  getFilmDetails(id) {
    return axios.get(`${url}/tv/${id}?api_key=${key}&language=fr-FR`);
  }

  getTVDetails(id) {
    return axios.get(`${url}/tv/${id}?api_key=${key}&language=fr-FR`);
  }

  getMoviesByCategories(idCat) {
    return axios.get(
      `${url}/discover/movie?api_key=${key}&language=fr-FR&region=FR&sort_by=popularity.desc&include_video=false&with_genres=${idCat}&`
    );
  }

  getTVShowByCategories(idCat) {
    return axios.get(
      `${url}/discover/tv?api_key=${key}&language=fr-FR&region=FR&sort_by=popularity.desc&include_video=false&with_genres=${idCat}&`
    );
  }
  getMoviesByName(name) {
    return axios.get(
      `${url}/search/movie?api_key=${key}&language=fr-FR&page=1&include_adult=false&query=${name}`
    );
  }

  getMoviesByName(name) {
    return axios.get(
      `${url}/search/movie?api_key=${key}&language=fr-FR&page=1&include_adult=false&query=${name}`
    );
  }

  getTvShowsByName(name) {
    return axios.get(
      `${url}/search/tv?api_key=${key}&language=fr-FR&page=1&include_adult=false&query=${name}`
    );
  }
}

export default TMDBService;
