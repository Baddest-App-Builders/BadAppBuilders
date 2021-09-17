import axios from "axios";

export default axios.create({
    baseURL: 'https://www.googlepapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: '[AIzaSyBOdVfrwOvCv5zyQNvGsa3hWUzrMRx488E]'

    }
});