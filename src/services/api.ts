import axios from 'axios';

const api = axios.create({
    baseURL:
        'https://cors-anywhere.herokuapp.com/https://epg-api.video.globo.com/programmes/',
});

export default api;
