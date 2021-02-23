import axios from "axios";

const KEY = 'AIzaSyDTEkFA7mK79sb_EAdQais6Gqhp7iHBMho';

export default axios.create({
    baseURL : 'GET https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: 'KEY'
    }
});
