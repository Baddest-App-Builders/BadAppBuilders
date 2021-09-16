import axios from 'axios';
const KEY = 'AIzaSyBOdVfrwOvCv5zyQNvGsa3hWUzrMRx488E';
//AIzaSyDahUmm6DW_GwjC3eMhfvRtEAr97qkxWEU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
