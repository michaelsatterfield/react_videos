import axios from "axios";
// import KEY from "../Keys";

const KEY = 'AIzaSyDTEkFA7mK79sb_EAdQais6Gqhp7iHBMho';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: KEY
    }
});
