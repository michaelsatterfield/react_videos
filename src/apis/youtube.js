import axios from "axios";
import KEY from "../Keys";



export default axios.create({
    baseURL : 'GET https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: 'KEY'
    }
});
