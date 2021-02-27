import axios from "axios";
<<<<<<< HEAD
import KEY from "../Keys";
=======
// import KEY from "../Keys";

const KEY = 'AIzaSyDTEkFA7mK79sb_EAdQais6Gqhp7iHBMho';
>>>>>>> 9f8e53825c066bf08893ae8b1fd3d1c80381cc6e

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
<<<<<<< HEAD
        maxResults: '10',
        key: 'KEY'
=======
        maxResults: '5',
        key: KEY
>>>>>>> 9f8e53825c066bf08893ae8b1fd3d1c80381cc6e
    }
});
