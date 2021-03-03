import axios from "axios";
// eslint-disable-next-line no-unused-vars
import KEY from "../Keys";








export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: '10',
        key: 'KEY'



    }
});
