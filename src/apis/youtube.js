import axios from "axios";


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
