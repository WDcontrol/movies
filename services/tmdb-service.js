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
    // return axios.get(`${url}/movie/${id}?api_key=${key}&language=fr-FR&append_to_response=videos,credits,recommandations`)
  }

  getFilmDetails(id) {
    return axios.get(`${url}/tv/${id}?api_key=${key}&language=fr-FR`);
  }
}

export default TMDBService;
