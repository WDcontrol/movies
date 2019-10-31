import axios from 'axios';

const key = 'api_key=0cb2b2ff71b28e5e89226d01b98cc3df';
const url = `https://api.themoviedb.org/3`;
// const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}`;

class TMDBService {

    getTrending(scope = "all", time_window = "day"){
        // @param:scope => all, movie, tv or person
        // @param:time_window => day or week
        return axios.get(`${url}/trending/${scope}/${time_window}?api_key=${key}`);
    }

    getDetails(id,type="movie"){
        // @param:id => id of the movie / tv show
        // @param:type => movie or tv
        return axios.get(`${url}/${type}/${id}?${key}`)
    }

    getRecommandationById(id, type="movie"){
        return axios.get(`${url}/${type}/${id}/recommandations?${key}`)
    }

    getVideos(id, type="movie"){
        return axios.get(`${url}/${type}/${id}/videos?${key}`)
    }

    getLinkedImages(id, type="movie"){
        
        return axios.get(`${url}/${type}/${id}/images?${key}`)
    }
    
    getMultiSearch(query,language="fr-FR"){
        let language = `language=${language}`;
        let query = `query=${query}`;
        return axios.get(`${url}/search/multi?${key}&${query}&${language}`)
    }
    

}

export default TMDBService